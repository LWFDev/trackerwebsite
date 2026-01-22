import React, { useEffect, useRef, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AlertCircle, RefreshCw, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  MAPBOX_ACCESS_TOKEN, 
  CONVENTION_CENTER, 
  BARUDAN_BOOTH, 
  MAP_CONFIG,
  FLOOR_PLAN_BOUNDS,
  FLOOR_PLAN_IMAGE
} from '@/config/expoConfig';
import { motion } from 'framer-motion';

interface BoothMapProps {
  userLocation: {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
  };
}

type EdgeSide = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Calculate distance between two coordinates in feet
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 20902231; // Earth's radius in feet
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Format distance for display
const formatDistance = (feet: number): string => {
  if (feet < 500) {
    return `${Math.round(feet)} ft`;
  } else if (feet < 5280) {
    const yards = Math.round(feet / 3);
    return `${yards} yds`;
  } else {
    const miles = (feet / 5280).toFixed(1);
    return `${miles} mi`;
  }
};

const BoothMap = ({ userLocation }: BoothMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const userMarker = useRef<mapboxgl.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [floorPlanVisible, setFloorPlanVisible] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isUserNearby, setIsUserNearby] = useState(false);
  const [edgeIndicator, setEdgeIndicator] = useState<{
    side: EdgeSide;
    distance: string;
  } | null>(null);

  // Check if user is within map bounds
  const isWithinBounds = useCallback((lat: number, lng: number): boolean => {
    return (
      lat >= MAP_CONFIG.bounds.south &&
      lat <= MAP_CONFIG.bounds.north &&
      lng >= MAP_CONFIG.bounds.west &&
      lng <= MAP_CONFIG.bounds.east
    );
  }, []);

  // Get edge side based on user position relative to map bounds
  const getEdgeSide = useCallback((lat: number, lng: number): EdgeSide => {
    const { north, south, east, west } = MAP_CONFIG.bounds;
    
    const isNorth = lat > north;
    const isSouth = lat < south;
    const isEast = lng > east;
    const isWest = lng < west;
    
    if (isNorth && isWest) return 'top-left';
    if (isNorth && isEast) return 'top-right';
    if (isSouth && isWest) return 'bottom-left';
    if (isSouth && isEast) return 'bottom-right';
    if (isNorth) return 'top';
    if (isSouth) return 'bottom';
    if (isWest) return 'left';
    if (isEast) return 'right';
    return 'top';
  }, []);

  // Get arrow rotation based on edge side
  const getArrowRotation = (side: EdgeSide): string => {
    switch (side) {
      case 'top': return 'rotate-180';
      case 'bottom': return 'rotate-0';
      case 'left': return 'rotate-90';
      case 'right': return '-rotate-90';
      case 'top-left': return 'rotate-[135deg]';
      case 'top-right': return 'rotate-[-135deg]';
      case 'bottom-left': return 'rotate-45';
      case 'bottom-right': return '-rotate-45';
      default: return 'rotate-0';
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [CONVENTION_CENTER.lng, CONVENTION_CENTER.lat],
      zoom: MAP_CONFIG.defaultZoom,
      maxZoom: MAP_CONFIG.maxZoom,
      minZoom: MAP_CONFIG.minZoom,
      maxBounds: [
        [MAP_CONFIG.bounds.west - 0.005, MAP_CONFIG.bounds.south - 0.005],
        [MAP_CONFIG.bounds.east + 0.005, MAP_CONFIG.bounds.north + 0.005],
      ],
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Error handling for authorization issues
    map.current.on('error', (e) => {
      console.error('Mapbox error:', e);
      const errorStatus = (e.error as { status?: number })?.status;
      if (errorStatus === 403) {
        setMapError('Map authorization failed. Please check token URL restrictions.');
      }
    });

    map.current.on('load', () => {
      if (!map.current) return;
      
      // Add floor plan image overlay
      map.current.addSource('floor-plan', {
        type: 'image',
        url: FLOOR_PLAN_IMAGE,
        coordinates: FLOOR_PLAN_BOUNDS,
      });

      map.current.addLayer({
        id: 'floor-plan-layer',
        type: 'raster',
        source: 'floor-plan',
        paint: {
          'raster-opacity': 0.85,
          'raster-fade-duration': 0,
        },
      });

      // Add Barudan booth marker on top of floor plan
      const boothEl = document.createElement('div');
      boothEl.className = 'booth-marker';
      boothEl.innerHTML = `
        <div class="relative">
          <div class="absolute -inset-2 bg-emerald-500/30 rounded-full animate-ping"></div>
          <div class="relative w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span class="text-white font-bold text-xs">B</span>
          </div>
        </div>
      `;

      new mapboxgl.Marker({ element: boothEl })
        .setLngLat([BARUDAN_BOOTH.lng, BARUDAN_BOOTH.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-emerald-700">${BARUDAN_BOOTH.name}</h3>
              <p class="text-sm text-gray-600">Booth #${BARUDAN_BOOTH.boothNumber}</p>
            </div>
          `)
        )
        .addTo(map.current);

      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Toggle floor plan visibility
  const toggleFloorPlan = () => {
    if (!map.current || !mapLoaded) return;
    const newVisibility = !floorPlanVisible;
    setFloorPlanVisible(newVisibility);
    map.current.setLayoutProperty(
      'floor-plan-layer',
      'visibility',
      newVisibility ? 'visible' : 'none'
    );
  };

  // Update user location marker
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    if (userLocation.latitude === null || userLocation.longitude === null) return;

    const nearby = isWithinBounds(userLocation.latitude, userLocation.longitude);
    setIsUserNearby(nearby);

    // Calculate distance to booth
    const distanceInFeet = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      BARUDAN_BOOTH.lat,
      BARUDAN_BOOTH.lng
    );
    const isAtBooth = distanceInFeet < 50;

    if (nearby) {
      // User is within map bounds - show their marker
      setEdgeIndicator(null);

      if (!userMarker.current) {
        // Create user marker
        const userEl = document.createElement('div');
        userEl.className = 'user-marker';
        userEl.innerHTML = `
          <div class="relative">
            <div class="absolute -inset-3 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div class="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
            ${isAtBooth ? '<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">You\'re here!</div>' : ''}
          </div>
        `;

        userMarker.current = new mapboxgl.Marker({ element: userEl })
          .setLngLat([userLocation.longitude, userLocation.latitude])
          .addTo(map.current);
      } else {
        // Update marker position
        userMarker.current.setLngLat([userLocation.longitude, userLocation.latitude]);
        
        // Update marker content if needed
        const el = userMarker.current.getElement();
        if (el) {
          el.innerHTML = `
            <div class="relative">
              <div class="absolute -inset-3 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div class="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              ${isAtBooth ? '<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">You\'re here!</div>' : ''}
            </div>
          `;
        }
      }
    } else {
      // User is outside bounds - remove marker, show edge indicator
      if (userMarker.current) {
        userMarker.current.remove();
        userMarker.current = null;
      }

      const distance = formatDistance(distanceInFeet);
      const side = getEdgeSide(userLocation.latitude, userLocation.longitude);
      setEdgeIndicator({ side, distance });
    }
  }, [userLocation.latitude, userLocation.longitude, userLocation.accuracy, mapLoaded, isWithinBounds, getEdgeSide]);

  // Get edge indicator position classes
  const getEdgePositionClasses = (side: EdgeSide): string => {
    switch (side) {
      case 'top': return 'top-16 left-1/2 -translate-x-1/2';
      case 'bottom': return 'bottom-16 left-1/2 -translate-x-1/2';
      case 'left': return 'left-4 top-1/2 -translate-y-1/2';
      case 'right': return 'right-4 top-1/2 -translate-y-1/2';
      case 'top-left': return 'top-16 left-4';
      case 'top-right': return 'top-16 right-4';
      case 'bottom-left': return 'bottom-16 left-4';
      case 'bottom-right': return 'bottom-16 right-4';
      default: return 'top-16 left-1/2 -translate-x-1/2';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
    >
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Floor plan toggle */}
      <button
        onClick={toggleFloorPlan}
        className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg text-xs font-medium flex items-center gap-2 hover:bg-background transition-colors"
      >
        <div className={`w-3 h-3 rounded border ${floorPlanVisible ? 'bg-primary border-primary' : 'bg-transparent border-muted-foreground'}`} />
        Floor Plan
      </button>

      {/* Edge proximity indicator when user is far away */}
      {edgeIndicator && (
        <div 
          className={`absolute flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-10 ${getEdgePositionClasses(edgeIndicator.side)}`}
        >
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          <span>You: {edgeIndicator.distance}</span>
          <Navigation className={`w-4 h-4 ${getArrowRotation(edgeIndicator.side)}`} />
        </div>
      )}

      {/* Map overlay legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: 'rgb(59, 130, 246)' }}></div>
          <span className="text-muted-foreground">Your location</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-1">
          <div className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: 'rgb(16, 185, 129)' }}></div>
          <span className="text-muted-foreground">Barudan booth #1429</span>
        </div>
      </div>

      {/* Loading overlay */}
      {!mapLoaded && !mapError && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm text-muted-foreground">Loading map...</span>
          </div>
        </div>
      )}

      {/* Error overlay */}
      {mapError && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-3 text-center max-w-xs">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-sm text-muted-foreground">{mapError}</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.reload()}
              className="mt-2"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BoothMap;

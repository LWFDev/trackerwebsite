import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_ACCESS_TOKEN, CONVENTION_CENTER, BARUDAN_BOOTH, MAP_CONFIG } from '@/config/expoConfig';
import { motion } from 'framer-motion';

interface BoothMapProps {
  userLocation: {
    latitude: number | null;
    longitude: number | null;
    accuracy: number | null;
  };
}

const BoothMap = ({ userLocation }: BoothMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const userMarker = useRef<mapboxgl.Marker | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add Barudan booth marker
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
            <h3 class="font-bold text-emerald-700">Barudan</h3>
            <p class="text-sm text-gray-600">Visit us at booth ${BARUDAN_BOOTH.boothNumber}</p>
          </div>
        `)
      )
      .addTo(map.current);

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Update user location marker
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    if (userLocation.latitude === null || userLocation.longitude === null) return;

    if (!userMarker.current) {
      // Create user marker
      const userEl = document.createElement('div');
      userEl.className = 'user-marker';
      userEl.innerHTML = `
        <div class="relative">
          <div class="absolute -inset-3 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div class="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
        </div>
      `;

      userMarker.current = new mapboxgl.Marker({ element: userEl })
        .setLngLat([userLocation.longitude, userLocation.latitude])
        .addTo(map.current);

      // Add accuracy circle
      if (userLocation.accuracy) {
        const accuracyCircle = {
          type: 'Feature' as const,
          geometry: {
            type: 'Point' as const,
            coordinates: [userLocation.longitude, userLocation.latitude],
          },
          properties: {},
        };

        if (!map.current.getSource('user-accuracy')) {
          map.current.addSource('user-accuracy', {
            type: 'geojson',
            data: accuracyCircle,
          });

          map.current.addLayer({
            id: 'user-accuracy-circle',
            type: 'circle',
            source: 'user-accuracy',
            paint: {
              'circle-radius': {
                stops: [
                  [0, 0],
                  [20, userLocation.accuracy],
                ],
                base: 2,
              },
              'circle-color': 'rgba(59, 130, 246, 0.15)',
              'circle-stroke-width': 1,
              'circle-stroke-color': 'rgba(59, 130, 246, 0.3)',
            },
          });
        }
      }

      // Fit bounds to show both user and booth
      const bounds = new mapboxgl.LngLatBounds()
        .extend([userLocation.longitude, userLocation.latitude])
        .extend([BARUDAN_BOOTH.lng, BARUDAN_BOOTH.lat]);

      map.current.fitBounds(bounds, {
        padding: 80,
        maxZoom: 19,
      });
    } else {
      // Update existing marker position
      userMarker.current.setLngLat([userLocation.longitude, userLocation.latitude]);

      // Update accuracy circle
      const source = map.current.getSource('user-accuracy') as mapboxgl.GeoJSONSource;
      if (source) {
        source.setData({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [userLocation.longitude, userLocation.latitude],
          },
          properties: {},
        });
      }
    }
  }, [userLocation.latitude, userLocation.longitude, userLocation.accuracy, mapLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
    >
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Map overlay legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 bg-blue-500 rounded-full border border-white"></div>
          <span className="text-muted-foreground">Your location</span>
        </div>
        <div className="flex items-center gap-2 text-xs mt-1">
          <div className="w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
          <span className="text-muted-foreground">Barudan booth</span>
        </div>
      </div>

      {/* Loading overlay */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm text-muted-foreground">Loading map...</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BoothMap;

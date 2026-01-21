import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Map, Navigation, MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useBearing } from '@/hooks/useBearing';
import { BARUDAN_BOOTH, EXPO_DETAILS, CONVENTION_CENTER } from '@/config/expoConfig';
import DirectionArrow from '@/components/expo/DirectionArrow';
import BoothMap from '@/components/expo/BoothMap';
import { Button } from '@/components/ui/button';
import barudanLogo from '@/assets/barudan-white.png';

type ViewMode = 'direction' | 'map';

const ExpoFinder = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('direction');
  const { latitude, longitude, accuracy, heading, error, loading, permissionStatus, requestPermission } = useGeolocation();
  
  const bearing = useBearing(
    { latitude, longitude },
    BARUDAN_BOOTH
  );

  // Permission denied state
  if (permissionStatus === 'denied') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-sm"
          >
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-xl font-bold mb-2">Location Access Required</h2>
            <p className="text-muted-foreground mb-6">
              To help you find the Barudan booth, we need access to your location. 
              Please enable location services in your browser settings.
            </p>
            <Button onClick={requestPermission} className="bg-emerald-600 hover:bg-emerald-700">
              Try Again
            </Button>
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Or visit us at:</p>
              <p className="font-semibold">{CONVENTION_CENTER.name}</p>
              <p className="text-sm text-muted-foreground">Booth {BARUDAN_BOOTH.boothNumber}</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading && !latitude) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Finding Your Location</h2>
            <p className="text-muted-foreground">
              Please allow location access when prompted...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* View toggle */}
      <div className="flex justify-center p-4">
        <div className="inline-flex bg-muted rounded-lg p-1">
          <button
            onClick={() => setViewMode('direction')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'direction' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Navigation className="w-4 h-4" />
            Direction
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'map' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Map className="w-4 h-4" />
            Map
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <AnimatePresence mode="wait">
          {viewMode === 'direction' ? (
            <motion.div
              key="direction"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="h-full flex flex-col items-center justify-center"
            >
              {bearing ? (
                <DirectionArrow
                  bearing={bearing.bearing}
                  distanceText={bearing.distanceText}
                  distanceFeet={bearing.distanceFeet}
                  deviceHeading={heading}
                />
              ) : (
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Calculating direction...</p>
                </div>
              )}

              {/* Accuracy indicator */}
              {accuracy && (
                <div className="mt-8 text-xs text-muted-foreground/60 text-center">
                  GPS accuracy: ±{Math.round(accuracy)}m
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-[60vh] md:h-[70vh]"
            >
              <BoothMap
                userLocation={{ latitude, longitude, accuracy }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom info card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-4">
            <img src={barudanLogo} alt="Barudan" className="h-8 object-contain" />
            <div className="flex-1">
              <h3 className="font-bold">Visit Barudan</h3>
              <p className="text-sm text-emerald-100">
                {EXPO_DETAILS.name} • {EXPO_DETAILS.dates}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-200">Booth</span>
              <p className="font-bold text-lg">{BARUDAN_BOOTH.boothNumber}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Error toast */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-4 right-4 bg-destructive text-destructive-foreground p-4 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">{error}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
    <div className="container mx-auto px-4 py-3 flex items-center gap-4">
      <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
        <ArrowLeft className="w-5 h-5" />
      </Link>
      <div className="flex-1">
        <h1 className="font-bold text-lg">Find Our Booth</h1>
        <p className="text-xs text-muted-foreground">{EXPO_DETAILS.name} {EXPO_DETAILS.year}</p>
      </div>
      <div className="flex items-center gap-1 text-emerald-600">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">Live</span>
      </div>
    </div>
  </header>
);

export default ExpoFinder;

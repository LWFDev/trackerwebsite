import { useMemo } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface BearingResult {
  bearing: number; // Degrees from north (0-360)
  distance: number; // Distance in meters
  distanceFeet: number; // Distance in feet
  distanceText: string; // Human-readable distance
}

// Calculate bearing between two points
const calculateBearing = (from: Coordinates, to: Coordinates): number => {
  const lat1 = (from.latitude * Math.PI) / 180;
  const lat2 = (to.latitude * Math.PI) / 180;
  const dLon = ((to.longitude - from.longitude) * Math.PI) / 180;

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

  let bearing = (Math.atan2(y, x) * 180) / Math.PI;
  bearing = (bearing + 360) % 360; // Normalize to 0-360

  return bearing;
};

// Calculate distance between two points using Haversine formula
const calculateDistance = (from: Coordinates, to: Coordinates): number => {
  const R = 6371000; // Earth's radius in meters
  const lat1 = (from.latitude * Math.PI) / 180;
  const lat2 = (to.latitude * Math.PI) / 180;
  const dLat = lat2 - lat1;
  const dLon = ((to.longitude - from.longitude) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

// Format distance for display
const formatDistance = (meters: number): string => {
  const feet = meters * 3.28084;
  
  if (feet < 50) {
    return "You're here!";
  } else if (feet < 500) {
    return `${Math.round(feet)} ft away`;
  } else {
    const yards = Math.round(feet / 3);
    return `${yards} yards away`;
  }
};

export const useBearing = (
  userPosition: { latitude: number | null; longitude: number | null },
  targetPosition: { lat: number; lng: number }
): BearingResult | null => {
  return useMemo(() => {
    if (userPosition.latitude === null || userPosition.longitude === null) {
      return null;
    }

    const from: Coordinates = {
      latitude: userPosition.latitude,
      longitude: userPosition.longitude,
    };

    const to: Coordinates = {
      latitude: targetPosition.lat,
      longitude: targetPosition.lng,
    };

    const bearing = calculateBearing(from, to);
    const distance = calculateDistance(from, to);
    const distanceFeet = distance * 3.28084;

    return {
      bearing,
      distance,
      distanceFeet,
      distanceText: formatDistance(distance),
    };
  }, [userPosition.latitude, userPosition.longitude, targetPosition.lat, targetPosition.lng]);
};

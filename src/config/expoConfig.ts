// Mapbox configuration for Impressions Expo booth finder
export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoiam9yZGFucGF0dGVyc29uIiwiYSI6ImNta29uNHA0czA3eGszZXB2aXdoNWNwY3EifQ.QvQYmJ9e9LiF6BxAh_aN9A';

// Long Beach Convention Center coordinates
export const CONVENTION_CENTER = {
  lat: 33.7650,
  lng: -118.1892,
  name: 'Long Beach Convention Center',
};

// Barudan booth location
export const BARUDAN_BOOTH = {
  lat: 33.7652,
  lng: -118.1890,
  name: 'Barudan America Inc',
  boothNumber: '1429',
};

// Map configuration
export const MAP_CONFIG = {
  defaultZoom: 17,
  maxZoom: 21,
  minZoom: 14,
  // Bounds for the convention center area
  bounds: {
    north: 33.7680,
    south: 33.7620,
    east: -118.1850,
    west: -118.1930,
  },
};

// Floor plan overlay configuration
// These coordinates define the four corners of the floor plan image
// Format: [top-left, top-right, bottom-right, bottom-left] as [lng, lat]
export const FLOOR_PLAN_BOUNDS: [[number, number], [number, number], [number, number], [number, number]] = [
  [-118.1918, 33.7672],  // Top-left (NW corner)
  [-118.1862, 33.7672],  // Top-right (NE corner)
  [-118.1862, 33.7628],  // Bottom-right (SE corner)
  [-118.1918, 33.7628],  // Bottom-left (SW corner)
];

export const FLOOR_PLAN_IMAGE = '/expo-floorplan.jpg';

// Expo event details
export const EXPO_DETAILS = {
  name: 'Impressions Expo',
  location: 'Long Beach, CA',
  dates: 'January 21-24, 2026',
  year: 2026,
};

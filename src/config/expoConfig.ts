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
  defaultZoom: 18,
  maxZoom: 21,
  minZoom: 15,
  // Bounds for the convention center area
  bounds: {
    north: 33.7670,
    south: 33.7630,
    east: -118.1870,
    west: -118.1920,
  },
};

// Expo event details
export const EXPO_DETAILS = {
  name: 'Impressions Expo',
  location: 'Long Beach, CA',
  dates: 'January 21-24, 2026',
  year: 2026,
};

// Mapbox configuration for Impressions Expo booth finder
export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoiam9yZGFucGF0dGVyc29uIiwiYSI6ImNta29uNHA0czA3eGszZXB2aXdoNWNwY3EifQ.QvQYmJ9e9LiF6BxAh_aN9A';

// Long Beach Convention Center coordinates
export const CONVENTION_CENTER = {
  lat: 33.7646,
  lng: -118.1885,
  name: 'Long Beach Convention Center',
};

// Barudan booth location (center of booth #1429)
export const BARUDAN_BOOTH = {
  lat: 33.7656,
  lng: -118.1887,
  name: 'Barudan America Inc',
  boothNumber: '1429',
};

// Map configuration
export const MAP_CONFIG = {
  defaultZoom: 18,
  maxZoom: 21,
  minZoom: 15,
  // Bounds for the convention center exhibit hall area
  bounds: {
    north: 33.7660,
    south: 33.7635,
    east: -118.1865,
    west: -118.1905,
  },
};

// Expo event details
export const EXPO_DETAILS = {
  name: 'Impressions Expo',
  location: 'Long Beach, CA',
  dates: 'January 21-24, 2026',
  year: 2026,
};

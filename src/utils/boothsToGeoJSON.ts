// Convert booth data to GeoJSON for Mapbox rendering
import { ExpoBooth } from '@/data/expoBooths';

export interface BoothFeatureProperties {
  id: string;
  boothNumber: string;
  company: string;
  category: string;
  size: string;
  color: string;
  isHighlighted: boolean;
}

export type BoothGeoJSON = GeoJSON.FeatureCollection<GeoJSON.Polygon, BoothFeatureProperties>;

// Color palette for booth categories
const CATEGORY_COLORS: Record<string, string> = {
  equipment: '#fbbf24',   // Amber/Yellow
  apparel: '#60a5fa',     // Blue
  supplies: '#f472b6',    // Pink
  software: '#a78bfa',    // Purple
  services: '#34d399',    // Emerald
  other: '#9ca3af',       // Gray
};

// Highlighted booth color (Barudan)
const HIGHLIGHT_COLOR = '#10b981'; // Emerald-500

const getBoothColor = (booth: ExpoBooth): string => {
  if (booth.isHighlighted) {
    return HIGHLIGHT_COLOR;
  }
  return CATEGORY_COLORS[booth.category] || CATEGORY_COLORS.other;
};

export const boothsToGeoJSON = (booths: ExpoBooth[]): BoothGeoJSON => {
  return {
    type: 'FeatureCollection',
    features: booths.map(booth => ({
      type: 'Feature',
      properties: {
        id: booth.id,
        boothNumber: booth.boothNumber,
        company: booth.company,
        category: booth.category,
        size: booth.size,
        color: getBoothColor(booth),
        isHighlighted: booth.isHighlighted || false,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          booth.bounds.sw,                                    // Bottom-left
          [booth.bounds.ne[0], booth.bounds.sw[1]],          // Bottom-right
          booth.bounds.ne,                                    // Top-right
          [booth.bounds.sw[0], booth.bounds.ne[1]],          // Top-left
          booth.bounds.sw,                                    // Close polygon
        ]],
      },
    })),
  };
};

// Create aisle lines GeoJSON
export const createAislesGeoJSON = (): GeoJSON.FeatureCollection<GeoJSON.LineString> => {
  // Main horizontal aisles
  const aisles: [number, number][][] = [
    // Horizontal aisles (West to East)
    [[-118.1902, 33.7643], [-118.1868, 33.7643]], // Between row 1 and 2
    [[-118.1902, 33.7648], [-118.1868, 33.7648]], // Between row 2 and 3
    [[-118.1902, 33.7652], [-118.1868, 33.7652]], // Between row 3 and 4
    
    // Vertical aisles (South to North)
    [[-118.1892, 33.7638], [-118.1892, 33.7658]], // Main center aisle
    [[-118.1880, 33.7638], [-118.1880, 33.7658]], // Secondary aisle
  ];

  return {
    type: 'FeatureCollection',
    features: aisles.map((coordinates, index) => ({
      type: 'Feature',
      properties: { id: `aisle-${index}` },
      geometry: {
        type: 'LineString',
        coordinates,
      },
    })),
  };
};

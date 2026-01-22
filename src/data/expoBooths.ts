// Expo booth data for Impressions Expo 2026
// Long Beach Convention Center - Exhibit Halls A, B, C

export interface ExpoBooth {
  id: string;
  boothNumber: string;
  company: string;
  bounds: {
    sw: [number, number]; // [lng, lat]
    ne: [number, number]; // [lng, lat]
  };
  category: 'equipment' | 'apparel' | 'supplies' | 'software' | 'services' | 'other';
  size: 'small' | 'medium' | 'large' | 'featured';
  isHighlighted?: boolean;
}

// Grid configuration for booth layout
// The convention center floor spans approximately:
// Longitude: -118.1905 to -118.1865 (West to East)
// Latitude: 33.7635 to 33.7658 (South to North)

const GRID = {
  west: -118.1902,
  east: -118.1868,
  south: 33.7638,
  north: 33.7655,
  // Booth dimensions in degrees (approximate)
  smallWidth: 0.00008,
  smallHeight: 0.00004,
  mediumWidth: 0.00012,
  mediumHeight: 0.00006,
  largeWidth: 0.00018,
  largeHeight: 0.00008,
  featuredWidth: 0.00024,
  featuredHeight: 0.0001,
  // Aisle width
  aisleWidth: 0.00004,
};

// Helper to create booth bounds from a starting point
const createBooth = (
  startLng: number,
  startLat: number,
  size: 'small' | 'medium' | 'large' | 'featured'
): { sw: [number, number]; ne: [number, number] } => {
  const widthKey = `${size}Width` as keyof typeof GRID;
  const heightKey = `${size}Height` as keyof typeof GRID;
  const width = GRID[widthKey] as number;
  const height = GRID[heightKey] as number;
  
  return {
    sw: [startLng, startLat],
    ne: [startLng + width, startLat + height],
  };
};

// Row positions (from south to north)
const rows = {
  row1: 33.7639,
  row2: 33.7644,
  row3: 33.7649,
  row4: 33.7653,
};

// Column positions (from west to east)
const cols = {
  col1: -118.1900,
  col2: -118.1893,
  col3: -118.1886,
  col4: -118.1879,
  col5: -118.1872,
};

export const expoBooths: ExpoBooth[] = [
  // === ROW 1 (South) ===
  {
    id: 'booth-1018',
    boothNumber: '1018',
    company: 'Smart Blanks',
    bounds: createBooth(cols.col1, rows.row1, 'medium'),
    category: 'apparel',
    size: 'medium',
  },
  {
    id: 'booth-1024',
    boothNumber: '1024',
    company: 'Cap America',
    bounds: createBooth(cols.col1 + 0.00016, rows.row1, 'small'),
    category: 'apparel',
    size: 'small',
  },
  {
    id: 'booth-1128',
    boothNumber: '1128',
    company: 'Brother International',
    bounds: createBooth(cols.col2, rows.row1, 'large'),
    category: 'equipment',
    size: 'large',
  },
  {
    id: 'booth-1137',
    boothNumber: '1137',
    company: 'Lane Seven Apparel',
    bounds: createBooth(cols.col3, rows.row1, 'medium'),
    category: 'apparel',
    size: 'medium',
  },
  {
    id: 'booth-1145',
    boothNumber: '1145',
    company: 'Independent Trading Co.',
    bounds: createBooth(cols.col3 + 0.00016, rows.row1, 'small'),
    category: 'apparel',
    size: 'small',
  },
  
  // === ROW 2 ===
  {
    id: 'booth-1211',
    boothNumber: '1211',
    company: 'M&R Printing Equipment',
    bounds: createBooth(cols.col1, rows.row2, 'large'),
    category: 'equipment',
    size: 'large',
  },
  {
    id: 'booth-1225',
    boothNumber: '1225',
    company: 'ROQ US',
    bounds: createBooth(cols.col2, rows.row2, 'featured'),
    category: 'equipment',
    size: 'featured',
  },
  {
    id: 'booth-1245',
    boothNumber: '1245',
    company: 'Kornit Digital',
    bounds: createBooth(cols.col3 + 0.0001, rows.row2, 'large'),
    category: 'equipment',
    size: 'large',
  },
  
  // === ROW 3 ===
  {
    id: 'booth-1308',
    boothNumber: '1308',
    company: 'STAHLS\'',
    bounds: createBooth(cols.col1, rows.row3, 'medium'),
    category: 'supplies',
    size: 'medium',
  },
  {
    id: 'booth-1320',
    boothNumber: '1320',
    company: 'Bella+Canvas',
    bounds: createBooth(cols.col1 + 0.00016, rows.row3, 'large'),
    category: 'apparel',
    size: 'large',
  },
  {
    id: 'booth-1337',
    boothNumber: '1337',
    company: 'Hirsch Solutions',
    bounds: createBooth(cols.col2 + 0.0001, rows.row3, 'large'),
    category: 'equipment',
    size: 'large',
  },
  {
    id: 'booth-1355',
    boothNumber: '1355',
    company: 'Stanley/Stella',
    bounds: createBooth(cols.col3 + 0.0001, rows.row3, 'featured'),
    category: 'apparel',
    size: 'featured',
  },
  
  // === ROW 4 (North) ===
  {
    id: 'booth-1405',
    boothNumber: '1405',
    company: 'Gildan',
    bounds: createBooth(cols.col1, rows.row4, 'large'),
    category: 'apparel',
    size: 'large',
  },
  // BARUDAN - HIGHLIGHTED
  {
    id: 'booth-1429',
    boothNumber: '1429',
    company: 'Barudan America Inc',
    bounds: createBooth(cols.col2, rows.row4, 'medium'),
    category: 'equipment',
    size: 'medium',
    isHighlighted: true,
  },
  {
    id: 'booth-1448',
    boothNumber: '1448',
    company: 'Next Level Apparel',
    bounds: createBooth(cols.col2 + 0.00016, rows.row4, 'large'),
    category: 'apparel',
    size: 'large',
  },
  {
    id: 'booth-1505',
    boothNumber: '1505',
    company: 'SanMar',
    bounds: createBooth(cols.col3 + 0.0001, rows.row4, 'featured'),
    category: 'apparel',
    size: 'featured',
  },
  
  // Additional booths to fill the floor
  {
    id: 'booth-1112',
    boothNumber: '1112',
    company: 'Ricoma',
    bounds: createBooth(cols.col4, rows.row1, 'medium'),
    category: 'equipment',
    size: 'medium',
  },
  {
    id: 'booth-1215',
    boothNumber: '1215',
    company: 'ColDesi',
    bounds: createBooth(cols.col4, rows.row2, 'small'),
    category: 'equipment',
    size: 'small',
  },
  {
    id: 'booth-1318',
    boothNumber: '1318',
    company: 'Melco',
    bounds: createBooth(cols.col4, rows.row3, 'medium'),
    category: 'equipment',
    size: 'medium',
  },
  {
    id: 'booth-1422',
    boothNumber: '1422',
    company: 'Avancé',
    bounds: createBooth(cols.col4, rows.row4, 'small'),
    category: 'equipment',
    size: 'small',
  },
];

// Get the Barudan booth specifically
export const getBarudanBooth = (): ExpoBooth | undefined => {
  return expoBooths.find(booth => booth.isHighlighted);
};

// Get booth center coordinates
export const getBoothCenter = (booth: ExpoBooth): [number, number] => {
  const centerLng = (booth.bounds.sw[0] + booth.bounds.ne[0]) / 2;
  const centerLat = (booth.bounds.sw[1] + booth.bounds.ne[1]) / 2;
  return [centerLng, centerLat];
};

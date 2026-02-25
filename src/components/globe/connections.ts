import { GLOBE_ARCS } from "@/lib/constants";

// Connection arc data for the globe
// All arcs originate from Armenia, Quindío, Colombia
export const arcsData = GLOBE_ARCS.map((arc) => ({
  ...arc,
  color: ["rgba(37, 99, 235, 0.6)", "rgba(6, 182, 212, 0.3)"],
  stroke: 0.5,
}));

// Points of interest (city markers)
export const pointsData = [
  // Home base
  {
    lat: 4.533889,
    lng: -75.681389,
    size: 0.12,
    color: "#06B6D4",
    label: "Armenia, Colombia",
    isHome: true,
  },
  // US Cities
  { lat: 40.7128, lng: -74.006, size: 0.06, color: "#2563EB", label: "New York" },
  { lat: 37.7749, lng: -122.4194, size: 0.06, color: "#2563EB", label: "San Francisco" },
  { lat: 34.0522, lng: -118.2437, size: 0.06, color: "#2563EB", label: "Los Angeles" },
  { lat: 41.8781, lng: -87.6298, size: 0.06, color: "#2563EB", label: "Chicago" },
  { lat: 25.7617, lng: -80.1918, size: 0.06, color: "#2563EB", label: "Miami" },
  // International
  { lat: 51.5074, lng: -0.1278, size: 0.06, color: "#2563EB", label: "London" },
  { lat: 48.8566, lng: 2.3522, size: 0.06, color: "#2563EB", label: "Paris" },
  { lat: -33.8688, lng: 151.2093, size: 0.06, color: "#2563EB", label: "Sydney" },
  // Latin America
  { lat: 19.4326, lng: -99.1332, size: 0.06, color: "#2563EB", label: "Mexico City" },
  { lat: -23.5505, lng: -46.6333, size: 0.06, color: "#2563EB", label: "São Paulo" },
];

// Ring pulse data (for the home city)
export const ringsData = [
  {
    lat: 4.533889,
    lng: -75.681389,
    maxR: 3,
    propagationSpeed: 2,
    repeatPeriod: 1200,
    color: "rgba(6, 182, 212, 0.5)",
  },
];

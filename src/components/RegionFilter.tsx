import React from 'react';

interface RegionFilterProps {
  regions: string[];
  activeRegion: string;
  onRegionChange: (region: string) => void;
}

export default function RegionFilter({ regions, activeRegion, onRegionChange }: RegionFilterProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeRegion === region 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
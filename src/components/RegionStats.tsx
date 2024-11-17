import { motion as m } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface RegionStatsData {
  gemeenten: number;
  inwoners: number;
}

export interface RegionStats {
  'Noord-Limburg': RegionStatsData;
  'Midden-Limburg': RegionStatsData;
  'Zuid-Limburg': RegionStatsData;
}

interface RegionStatsProps {
  stats: RegionStats;
}

export default function RegionStats({ stats }: RegionStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {Object.entries(stats).map(([region, data]) => (
        <m.div
          key={region}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">{region}</h2>
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">{data.gemeenten} gemeenten</p>
            <p className="text-gray-600">{data.inwoners.toLocaleString()} inwoners</p>
          </div>
        </m.div>
      ))}
    </div>
  );
}

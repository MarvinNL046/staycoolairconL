import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalculatorInputs {
  roomSize: number;
  sunExposure: 'low' | 'medium' | 'high';
  insulation: 'poor' | 'average' | 'good';
  occupants: number;
  heatSources: boolean;
}

export default function CapacityCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    roomSize: 0,
    sunExposure: 'medium',
    insulation: 'average',
    occupants: 1,
    heatSources: false
  });

  const [result, setResult] = useState<number | null>(null);

  const calculateCapacity = () => {
    // Base calculation: 100W per m² (minimum requirement)
    let baseCapacity = inputs.roomSize * 100;

    // Sun exposure adjustments
    const sunFactor = {
      low: 0.9,
      medium: 1.0,
      high: 1.2
    };
    baseCapacity *= sunFactor[inputs.sunExposure];

    // Insulation adjustments
    const insulationFactor = {
      poor: 1.2,
      average: 1.0,
      good: 0.9
    };
    baseCapacity *= insulationFactor[inputs.insulation];

    // Occupants: add 100W per person after the first person
    if (inputs.occupants > 1) {
      baseCapacity += (inputs.occupants - 1) * 100;
    }

    // Heat sources (computers, appliances, etc.)
    if (inputs.heatSources) {
      baseCapacity *= 1.1; // 10% increase
    }

    // Convert to kW and round to 1 decimal
    const capacityInKW = Math.round(baseCapacity / 100) / 10;
    setResult(capacityInKW);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Airco Capaciteit Calculator</h2>
      
      <div className="space-y-6">
        {/* Room Size */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Kamergrootte (m²)
          </label>
          <input
            type="number"
            min="0"
            value={inputs.roomSize || ''}
            onChange={(e) => setInputs({ ...inputs, roomSize: parseFloat(e.target.value) || 0 })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sun Exposure */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Zonlicht
          </label>
          <select
            value={inputs.sunExposure}
            onChange={(e) => setInputs({ ...inputs, sunExposure: e.target.value as 'low' | 'medium' | 'high' })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Weinig (noordzijde)</option>
            <option value="medium">Gemiddeld</option>
            <option value="high">Veel (zuidzijde)</option>
          </select>
        </div>

        {/* Insulation */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Isolatie
          </label>
          <select
            value={inputs.insulation}
            onChange={(e) => setInputs({ ...inputs, insulation: e.target.value as 'poor' | 'average' | 'good' })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="poor">Slecht (enkel glas, geen isolatie)</option>
            <option value="average">Gemiddeld (dubbel glas)</option>
            <option value="good">Goed (HR++ glas, goede isolatie)</option>
          </select>
        </div>

        {/* Occupants */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Aantal personen
          </label>
          <input
            type="number"
            min="1"
            value={inputs.occupants}
            onChange={(e) => setInputs({ ...inputs, occupants: parseInt(e.target.value) || 1 })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Heat Sources */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={inputs.heatSources}
              onChange={(e) => setInputs({ ...inputs, heatSources: e.target.checked })}
              className="rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm font-medium">
              Warmtebronnen aanwezig (computers, apparatuur)
            </span>
          </label>
        </div>

        {/* Calculate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculateCapacity}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Bereken Capaciteit
        </motion.button>

        {/* Result */}
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-blue-50 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Aanbevolen Capaciteit</h3>
            <p className="text-2xl font-bold text-blue-600">{result} kW</p>
            <p className="mt-2 text-sm text-gray-600">
              Dit is een minimale schatting gebaseerd op 100 watt per vierkante meter. Voor een exacte berekening kunt u contact met ons opnemen.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

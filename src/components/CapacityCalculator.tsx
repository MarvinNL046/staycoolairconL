import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface CalculatorInputs {
  roomSize: number;
  sunExposure: 'low' | 'medium' | 'high';
  insulation: 'poor' | 'average' | 'good';
  occupants: number;
  heatSources: boolean;
}

export default function CapacityCalculator() {
  // Load saved inputs from localStorage
  const savedInputs = localStorage.getItem('capacityCalculatorInputs');
  const initialInputs = savedInputs ? JSON.parse(savedInputs) : {
    roomSize: 0,
    sunExposure: 'medium',
    insulation: 'average',
    occupants: 1,
    heatSources: false
  };

  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

  // Save inputs to localStorage when they change
  useEffect(() => {
    localStorage.setItem('capacityCalculatorInputs', JSON.stringify(inputs));
  }, [inputs]);

  const resetCalculator = () => {
    setInputs({
      roomSize: 0,
      sunExposure: 'medium',
      insulation: 'average',
      occupants: 1,
      heatSources: false
    });
    setResult(null);
  };

  const [result, setResult] = useState<number | null>(null);
  
  const exportToPDF = () => {
    if (result === null) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Add header
    doc.setFontSize(20);
    doc.text('Airco Capaciteit Berekening', pageWidth/2, 20, { align: 'center' });
    
    // Add calculation details
    doc.setFontSize(12);
    const details = [
      `Kamergrootte: ${inputs.roomSize} m²`,
      `Zonlicht: ${inputs.sunExposure === 'low' ? 'Weinig' : inputs.sunExposure === 'medium' ? 'Gemiddeld' : 'Veel'}`,
      `Isolatie: ${inputs.insulation === 'poor' ? 'Slecht' : inputs.insulation === 'average' ? 'Gemiddeld' : 'Goed'}`,
      `Aantal personen: ${inputs.occupants}`,
      `Warmtebronnen aanwezig: ${inputs.heatSources ? 'Ja' : 'Nee'}`,
      '',
      `Aanbevolen Capaciteit: ${result} kW`
    ];
    
    details.forEach((detail, index) => {
      doc.text(detail, 20, 40 + (index * 10));
    });
    
    // Add footer
    doc.setFontSize(10);
    doc.text('Berekend door StayCool Airco Calculator', pageWidth/2, 280, { align: 'center' });
    doc.text('Voor een exacte berekening kunt u contact met ons opnemen.', pageWidth/2, 285, { align: 'center' });
    
    // Save the PDF
    doc.save('airco-capaciteit-berekening.pdf');
  };

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
      
      <div className="space-y-6 relative">
        {/* Reset Button */}
        <button
          onClick={resetCalculator}
          className="absolute top-0 right-0 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Reset
        </button>
        {/* Room Size */}
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium mb-2">
              Kamergrootte (m²)
            </label>
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -translate-x-1/2 left-1/2 mt-1">
                Meet de lengte en breedte van de kamer en vermenigvuldig deze voor de totale oppervlakte
              </div>
            </div>
          </div>
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
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium mb-2">
              Zonlicht
            </label>
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -translate-x-1/2 left-1/2 mt-1">
                Kies 'veel' voor ramen op het zuiden, 'weinig' voor het noorden, en 'gemiddeld' voor oost/west
              </div>
            </div>
          </div>
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
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium mb-2">
              Isolatie
            </label>
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -translate-x-1/2 left-1/2 mt-1">
                Controleer uw type beglazing en muurisolatie voor de beste inschatting
              </div>
            </div>
          </div>
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
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium mb-2">
              Aantal personen
            </label>
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -translate-x-1/2 left-1/2 mt-1">
                Het gemiddeld aantal mensen dat regelmatig in de ruimte aanwezig is
              </div>
            </div>
          </div>
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
          <div className="flex items-center justify-between">
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
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              <div className="invisible group-hover:visible absolute z-10 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg -translate-x-1/2 left-1/2 mt-1">
                Selecteer dit als er regelmatig apparatuur aanwezig is die warmte produceert
              </div>
            </div>
          </div>
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
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-blue-600">{result} kW</p>
              <button
                onClick={exportToPDF}
                className="flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Dit is een minimale schatting gebaseerd op 100 watt per vierkante meter. Voor een exacte berekening kunt u contact met ons opnemen.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

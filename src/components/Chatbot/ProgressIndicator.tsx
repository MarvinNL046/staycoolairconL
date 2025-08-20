import React from 'react';
import { m } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  flow: 'sales' | 'support';
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps,
  flow 
}) => {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="px-4 py-2 border-b border-gray-200">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">
          Stap {currentStep} van {totalSteps}
        </span>
        <span className="text-xs text-gray-600">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <m.div
          className={`h-full ${
            flow === 'sales' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
              : 'bg-gradient-to-r from-orange-500 to-orange-600'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};
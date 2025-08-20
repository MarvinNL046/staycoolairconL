import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import type { ContactData } from './types';

interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
  isLoading: boolean;
  flow: 'sales' | 'support';
  initialData?: Partial<ContactData>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit, 
  isLoading, 
  flow,
  initialData = {} 
}) => {
  const [formData, setFormData] = useState<ContactData>({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    postalCode: initialData.postalCode || '',
    propertyType: initialData.propertyType || '',
    roomCount: initialData.roomCount || '',
    budget: initialData.budget || '',
    timeline: initialData.timeline || '',
    problemType: initialData.problemType || '',
    problemDescription: initialData.problemDescription || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof ContactData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4">
      <div>
        <input
          type="text"
          placeholder="Naam *"
          value={formData.name}
          onChange={handleChange('name')}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange('email')}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <input
          type="tel"
          placeholder="Telefoon *"
          value={formData.phone}
          onChange={handleChange('phone')}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {flow === 'sales' && (
        <div>
          <input
            type="text"
            placeholder="Postcode (alleen Limburg)"
            value={formData.postalCode}
            onChange={handleChange('postalCode')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      
      {flow === 'support' && (
        <div>
          <textarea
            placeholder="Beschrijf de storing (optioneel)"
            value={formData.problemDescription}
            onChange={handleChange('problemDescription')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      )}
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Versturen...</span>
          </>
        ) : (
          <span>Verstuur aanvraag</span>
        )}
      </button>
    </form>
  );
};
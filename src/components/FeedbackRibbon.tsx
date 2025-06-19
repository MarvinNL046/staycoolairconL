import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';
import { sendEmail } from '../utils/email';
import toast from 'react-hot-toast';

const FeedbackRibbon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vul alstublieft alle velden in');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: 'N/A', // Required by interface but not needed for feedback
        city: 'Feedback Form',
        message: `Rating: ${formData.rating}/5\n\n${formData.message}`,
        subject: 'Website Feedback'
      };

      await sendEmail(emailData);
      
      toast.success('Bedankt voor uw feedback!');
      setFormData({
        name: '',
        email: '',
        message: '',
        rating: 5
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending feedback:', error);
      toast.error('Er ging iets mis. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Feedback Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-6 rounded-l-lg shadow-lg z-40 transition-all duration-300 hover:px-4"
        aria-label="Geef feedback"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-sm font-medium ml-1" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Feedback
        </span>
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Uw feedback is waardevol voor ons
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Sluiten"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="feedback-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="feedback-rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Hoe waardeert u onze website?
                  </label>
                  <div className="flex space-x-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className={`text-2xl ${
                          star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                        aria-label={`${star} sterren`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Uw feedback *
                  </label>
                  <textarea
                    id="feedback-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Vertel ons wat u vindt van onze website..."
                    required
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verstuur Feedback'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Annuleren
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackRibbon;
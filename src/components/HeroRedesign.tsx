import React, { useState, useEffect } from 'react';
import { Play, Check, X, Calendar } from 'lucide-react';
import Button from './ui/Button';
import MultiStepLeadForm from './MultiStepLeadForm';
import TrustooWidget from './TrustooWidget';

export default function HeroRedesign() {
  const [showVideo, setShowVideo] = useState(false);
  // TrustooWidget pas mounten 5s post-load — voorkomt 616ms LCP-blocking
  // door 3 woff2 fonts van static.trustoo.nl op critical path.
  const [showTrustoo, setShowTrustoo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTrustoo(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-32 overflow-hidden bg-quatt-warm">
      {/* Background YouTube iframe verwijderd — opacity 0.03 = decoratief, kost 1MB+ + LCP-tijd */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content — geen framer-motion wrapper voor LCP-snelheid */}
          <div className="max-w-2xl text-center lg:text-left">
              <Button
                href="https://afspraken.staycoolairco.nl"
                variant="primary"
                className="md:hidden mb-10 mx-auto rounded-full px-6 py-3 h-auto text-xs uppercase tracking-widest shadow-xl shadow-quatt-orange/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan gratis adviesgesprek
              </Button>

              <button
                type="button"
                onClick={() => setShowVideo(true)}
                aria-label="Bekijk de StayCool bedrijfsfilm"
                className="hidden md:inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm mb-10 mx-auto lg:mx-0 cursor-pointer hover:border-quatt-orange transition-colors group"
              >
                <div className="w-6 h-6 bg-quatt-orange/10 rounded-full flex items-center justify-center group-hover:bg-quatt-orange transition-colors">
                  <Play className="w-3 h-3 text-quatt-orange group-hover:text-white fill-current translate-x-0.5" aria-hidden="true" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-quatt-dark">Bekijk onze bedrijfsfilm</span>
              </button>

              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-quatt-dark leading-[0.85] tracking-tighter mb-10 italic">
                De toekomst is <br />
                <span className="text-quatt-orange">elektrisch <br className="hidden sm:block" /> verwarmen.</span>
              </h2>

              <p className="text-xl sm:text-2xl text-gray-500 font-medium mb-12 tracking-tight max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Schakel over op de meest efficiënte airco systemen en <span className="text-quatt-dark font-bold">bespaar direct 60%</span> op uw gasrekening.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-quatt-orange" />
                    <span className="font-bold text-sm">Erkend Installateur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-quatt-orange" />
                    <span className="font-bold text-sm">Binnen 2 weken</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Right: Lead Form — geen framer-motion wrapper, deferred Trustoo */}
          <div className="relative h-full">
            <MultiStepLeadForm />
            <div className="mt-6 flex justify-center min-h-[40px]">
              {showTrustoo && <TrustooWidget size="small" />}
            </div>
          </div>

        </div>
      </div>

      {/* Video Lightbox */}
      {showVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bedrijfsvideo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-quatt-dark/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1"
              title="StayCool Airco bedrijfsfilm"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <button
              type="button"
              aria-label="Video sluiten"
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Play, Check, X } from 'lucide-react';
import MultiStepLeadForm from './MultiStepLeadForm';
import TrustooWidget from './TrustooWidget';
import WebglAccent from './ui/WebglAccent';
import WaveDivider from './ui/WaveDivider';

const POSTER = '/images/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp'; // confirmed in Step 1

export default function HeroRedesign() {
  const [showVideo, setShowVideo] = useState(false);
  const [showTrustoo, setShowTrustoo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTrustoo(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2080C0] to-[#40B0E0] pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-10">

          {/* Left: content */}
          <div className="max-w-xl text-center lg:text-left">
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              aria-label="Bekijk de StayCool bedrijfsfilm"
              className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-pill shadow-elevation-sm mb-8 mx-auto lg:mx-0 cursor-pointer hover:shadow-elevation-md transition-shadow group"
            >
              <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <Play className="w-3 h-3 text-accent group-hover:text-white fill-current translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-ink">Bekijk onze bedrijfsfilm</span>
            </button>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              De toekomst is <span className="text-[#eaf6fc]">elektrisch verwarmen.</span>
            </h2>

            <p className="font-display text-lg sm:text-xl text-[#eaf6fc] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Schakel over op de meest efficiënte airco-systemen en <span className="text-white font-bold">bespaar direct 60%</span> op je gasrekening.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-white font-bold text-sm mb-8">
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Erkend installateur</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Binnen 2 weken</span>
            </div>

            <WebglAccent
              poster={POSTER}
              alt="StayCool airco binnenunit"
              className="hidden lg:block w-full h-44"
            />
          </div>

          {/* Right: lead form */}
          <div className="relative">
            <div className="bg-surface rounded-2xl shadow-elevation-lg p-6 sm:p-8">
              <MultiStepLeadForm />
            </div>
            <div className="mt-6 flex justify-center min-h-[40px]">
              {showTrustoo && <TrustooWidget size="small" />}
            </div>
          </div>

        </div>
      </div>

      {/* wavy bottom into the next (white) section */}
      <WaveDivider fill="#ffffff" className="relative z-0 -mb-px" />

      {/* Video Lightbox (unchanged behavior) */}
      {showVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bedrijfsvideo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
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

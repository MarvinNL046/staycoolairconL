import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Play, Check, Zap, Shield, X } from 'lucide-react';
import Button from './ui/Button';
import MultiStepLeadForm from './MultiStepLeadForm';

export default function HeroRedesign() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-32 overflow-hidden bg-quatt-warm">
      {/* Background Video Overlay (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none overflow-hidden scale-110">
        <iframe
          src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1&mute=1&controls=0&loop=1&playlist=9m-jkGgfLog&showinfo=0&rel=0&iv_load_policy=3"
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm mb-10 mx-auto lg:mx-0 cursor-pointer hover:border-quatt-orange transition-colors group"
              >
                <div className="w-6 h-6 bg-quatt-orange/10 rounded-full flex items-center justify-center group-hover:bg-quatt-orange transition-colors">
                  <Play className="w-3 h-3 text-quatt-orange group-hover:text-white fill-current translate-x-0.5" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-quatt-dark">Bekijk onze bedrijfsfilm</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-quatt-dark leading-[0.85] tracking-tighter mb-10 italic">
                De toekomst is <br />
                <span className="text-quatt-orange">elektrisch <br className="hidden sm:block" /> verwarmen.</span>
              </h1>

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
            </m.div>
          </div>

          {/* Right: Lead Form */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full"
          >
            <MultiStepLeadForm />
          </m.div>

        </div>
      </div>

      {/* Video Lightbox */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-quatt-dark/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <button
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

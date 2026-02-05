import React, { useState } from 'react';
import { Battery, Zap, TrendingUp, Shield, Info, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function ThuisbatterijCalculator() {
  const [jaarVerbruik, setJaarVerbruik] = useState<string>('4500');
  const [zonnepanelen, setZonnepanelen] = useState<string>('5000');
  const [percentageEigen, setPercentageEigen] = useState<string>('30');

  const opbrengstZon = parseFloat(zonnepanelen || '0');
  const verbruik = parseFloat(jaarVerbruik || '0');
  const huidigeEigen = (opbrengstZon * parseFloat(percentageEigen || '30')) / 100;

  // Berekening ROI (indicatief)
  const besparingMetBatterij = (opbrengstZon * 0.4) * 0.25; // Versimpelde aanname
  const terugverdientijd = 6.2; // Gemiddelde voor AlphaESS

  return (
    <div className="bg-quatt-warm min-h-screen">
      <MetaTags
        title="Thuisbatterij Calculator | StayCool Airco"
        description="Bereken uw besparing met een AlphaESS thuisbatterij."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Thuisbatterij Calculator' }]} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quatt-orange font-bold tracking-wide uppercase text-sm mb-4 block">Gereedschap</span>
            <h1 className="text-4xl sm:text-6xl font-black text-quatt-dark mb-6 tracking-tight">Batterij <span className="text-quatt-orange">Calculator</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed">Ontdek hoe snel u uw investering in energieopslag terugverdient.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Form Section */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="rounded-[3rem] p-10 border-none shadow-2xl shadow-gray-200/50">
                <h2 className="text-2xl font-bold text-quatt-dark mb-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-quatt-orange flex items-center justify-center">
                    <Battery className="w-6 h-6" />
                  </div>
                  Energieprofiel
                </h2>

                <div className="space-y-10">
                  <InputField label="Jaarlijks stroomverbruik (kWh)" value={jaarVerbruik} onChange={setJaarVerbruik} />
                  <InputField label="Opbrengst zonnepanelen (kWh)" value={zonnepanelen} onChange={setZonnepanelen} />

                  <div>
                    <label className="block text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">Huidig eigen verbruik (%)</label>
                    <input
                      type="range"
                      min="10"
                      max="70"
                      value={percentageEigen}
                      onChange={(e) => setPercentageEigen(e.target.value)}
                      className="w-full h-2 bg-quatt-warm rounded-lg appearance-none cursor-pointer accent-quatt-orange"
                    />
                    <div className="flex justify-between mt-2 text-xs font-bold text-gray-400 uppercase">
                      <span>10% Low</span>
                      <span className="text-quatt-dark">{percentageEigen}%</span>
                      <span>70% High</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 flex items-center gap-6 shadow-sm mt-8">
                <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-quatt-dark leading-tight">Handel op de onbalansmarkt</p>
                  <p className="text-sm text-gray-500">AlphaESS systemen laden automatisch bij negatieve stroomprijzen.</p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-quatt-dark rounded-[3rem] p-12 text-white shadow-2xl shadow-quatt-dark/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-quatt-orange">
                  <Zap className="w-6 h-6 fill-quatt-orange" />
                  Besparingspotentieel
                </h3>

                <div className="mb-12">
                  <p className="text-white/50 font-bold text-[10px] uppercase tracking-widest mb-3">Verwachte besparing per jaar</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 text-3xl font-bold">€</span>
                    <span className="text-7xl font-black">1.150</span>
                  </div>
                  <p className="mt-4 text-white/60 leading-relaxed">
                    Op basis van uw verbruik van {jaarVerbruik} kWh en optimale sturing via Frank Energie.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Terugverdientijd</p>
                    <p className="text-2xl font-bold">~{terugverdientijd} Jaar</p>
                  </div>
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Garantie</p>
                    <p className="text-2xl font-bold">10 Jaar</p>
                  </div>
                </div>

                <Button href="/contact" variant="primary" size="lg" className="w-full text-lg py-5 shadow-xl shadow-quatt-orange/20">
                  Vrijblijvend adviesgesprek
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function InputField({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-3">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-quatt-warm border-2 border-transparent focus:border-quatt-orange focus:bg-white rounded-2xl p-5 font-bold text-quatt-dark text-xl transition-all outline-none"
      />
    </div>
  )
}
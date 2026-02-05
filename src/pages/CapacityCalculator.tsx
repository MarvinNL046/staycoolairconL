import React, { useState } from 'react';
import { Calculator, Home, Sun, Users, Thermometer, Wind, AlertCircle, Info, ChevronDown, ChevronUp, Settings, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function CapacityCalculator() {
  const [kamerLengte, setKamerLengte] = useState<string>('5');
  const [kamerBreedte, setKamerBreedte] = useState<string>('4');
  const [kamerHoogte, setKamerHoogte] = useState<string>('2.6');
  const [aantalPersonen, setAantalPersonen] = useState<string>('2');
  const [zonlicht, setZonlicht] = useState<'weinig' | 'gemiddeld' | 'veel'>('gemiddeld');
  const [isolatie, setIsolatie] = useState<'slecht' | 'gemiddeld' | 'goed'>('gemiddeld');

  const kamerGrootte = parseFloat(kamerLengte || '0') * parseFloat(kamerBreedte || '0');
  const kamerVolume = kamerGrootte * parseFloat(kamerHoogte || '2.6');

  let basisCapaciteit = kamerGrootte * 100;
  const zonlichtFactor = { weinig: 0.9, gemiddeld: 1.0, veel: 1.2 };
  basisCapaciteit *= zonlichtFactor[zonlicht];
  const isolatieFactor = { slecht: 1.3, gemiddeld: 1.0, goed: 0.85 };
  basisCapaciteit *= isolatieFactor[isolatie];
  const extraPersonen = Math.max(0, parseInt(aantalPersonen || '0') - 1);
  basisCapaciteit += extraPersonen * 100;

  const koelCapaciteitKW = Math.round(basisCapaciteit / 100) / 10;

  return (
    <div className="bg-quatt-warm min-h-screen">
      <MetaTags
        title="Airco Capaciteit Calculator | StayCool Airco"
        description="Bereken gratis welke airco capaciteit u nodig heeft."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Capaciteit Calculator' }]} />
      </div>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-quatt-orange font-bold tracking-wide uppercase text-sm mb-4 block">Gereedschap</span>
            <h1 className="text-4xl sm:text-6xl font-black text-quatt-dark mb-6 tracking-tight">Capaciteit <span className="text-quatt-orange">Calculator</span></h1>
            <p className="text-xl text-gray-600 leading-relaxed">Bereken in enkele stappen welk koelvermogen ideaal is voor uw ruimte.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Form Section */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="rounded-[3rem] p-10 border-none shadow-2xl shadow-gray-200/50">
                <h2 className="text-2xl font-bold text-quatt-dark mb-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-quatt-orange flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  Afmetingen & Gebruik
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <InputField label="Lengte (m)" value={kamerLengte} onChange={setKamerLengte} />
                  <InputField label="Breedte (m)" value={kamerBreedte} onChange={setKamerBreedte} />
                  <InputField label="Hoogte (m)" value={kamerHoogte} onChange={setKamerHoogte} />
                </div>

                <div className="mb-10">
                  <label className="block text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">Aantal personen</label>
                  <div className="flex gap-3">
                    {['1', '2', '3', '4', '5+'].map(v => (
                      <button
                        key={v}
                        onClick={() => setAantalPersonen(v)}
                        className={`flex-1 py-4 rounded-2xl font-bold transition-all border-2 ${aantalPersonen === v ? 'bg-quatt-dark text-white border-quatt-dark' : 'bg-quatt-warm text-gray-500 border-transparent hover:border-gray-200'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">Isolatiegraad</label>
                    <div className="space-y-3">
                      <SelectOption active={isolatie === 'goed'} onClick={() => setIsolatie('goed')} label="Goed" sub="Modern, HR+ glas" />
                      <SelectOption active={isolatie === 'gemiddeld'} onClick={() => setIsolatie('gemiddeld')} label="Gemiddeld" sub="Spouwmuur, dubbel glas" />
                      <SelectOption active={isolatie === 'slecht'} onClick={() => setIsolatie('slecht')} label="Slecht" sub="Geen isolatie, enkel glas" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">Inval zonlicht</label>
                    <div className="space-y-3">
                      <SelectOption active={zonlicht === 'veel'} onClick={() => setZonlicht('veel')} label="Veel" sub="Zuidzijde, veel glas" />
                      <SelectOption active={zonlicht === 'gemiddeld'} onClick={() => setZonlicht('gemiddeld')} label="Gemiddeld" sub="Oost/Westzijde" />
                      <SelectOption active={zonlicht === 'weinig'} onClick={() => setZonlicht('weinig')} label="Weinig" sub="Noordzijde, kleine ramen" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-quatt-dark rounded-[3rem] p-12 text-white shadow-2xl shadow-quatt-dark/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <Check className="w-6 h-6 text-quatt-orange" />
                  Uw Resultaat
                </h3>

                <div className="mb-12">
                  <p className="text-white/50 font-bold text-[10px] uppercase tracking-widest mb-3">Aanbevolen vermogen</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl font-black">{koelCapaciteitKW}</span>
                    <span className="text-2xl font-bold text-quatt-orange">kW</span>
                  </div>
                  <p className="mt-4 text-white/60 leading-relaxed italic">
                    Dit vermogen zorgt voor een snelle koeling en efficiënte verwarming van uw ruimte ({kamerGrootte.toFixed(1)} m²).
                  </p>
                </div>

                <div className="space-y-4 mb-12">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-white/50">Koelvermogen</span>
                    <span className="font-bold">{koelCapaciteitKW} kW</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-white/50">Verwarmvermogen</span>
                    <span className="font-bold">{(koelCapaciteitKW * 1.2).toFixed(1)} kW</span>
                  </div>
                </div>

                <Button href="/contact" variant="primary" size="lg" className="w-full text-lg py-5 shadow-xl shadow-quatt-orange/20">
                  Vraag offerte aan
                </Button>
              </div>

              <div className="mt-8 bg-white rounded-3xl p-8 border border-gray-100 flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-quatt-orange flex items-center justify-center shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-quatt-dark mb-1">Persoonlijk advies?</p>
                  <p className="text-sm text-gray-500">Iedere woning is uniek. Plan een gratis gesprek voor een berekening op locatie.</p>
                </div>
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
        className="w-full bg-quatt-warm border-2 border-transparent focus:border-quatt-orange focus:bg-white rounded-2xl p-4 font-bold text-quatt-dark text-lg transition-all outline-none"
      />
    </div>
  )
}

function SelectOption({ active, onClick, label, sub }: { active: boolean, onClick: () => void, label: string, sub: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex justify-between items-center group ${active ? 'bg-quatt-dark text-white border-quatt-dark' : 'bg-quatt-warm text-gray-500 border-transparent hover:border-gray-200'}`}
    >
      <div>
        <p className={`font-bold ${active ? 'text-white' : 'text-quatt-dark'}`}>{label}</p>
        <p className={`text-xs ${active ? 'text-white/60' : 'text-gray-400'}`}>{sub}</p>
      </div>
      {active && <Check className="w-5 h-5 text-quatt-orange" />}
    </button>
  )
}
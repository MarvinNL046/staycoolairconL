import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, TrendingUp, Shield, Clock, ArrowRight, Zap, Check } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

export default function HomeBattery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-quatt-orange px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              <Zap className="h-3.5 w-3.5 fill-quatt-orange" />
              Nieuw: Slimme Energieopslag
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-quatt-dark mb-6 tracking-tight leading-tight">
              Bespaar tot wel <br />
              <span className="text-quatt-orange">€1.500 per jaar</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Met een AlphaESS thuisbatterij slaat u zonne-energie op wanneer het gratis is, en gebruikt u het wanneer u het nodig heeft. Of handel automatisch op de energiemarkt voor maximaal rendement.
            </p>

            <div className="space-y-6 mb-12">
              <Benefit icon={TrendingUp} title="Slim Stroom Handelen" description="Koopt automatisch in bij lage prijzen en ontlaadt bij pieken." color="text-green-600" bg="bg-green-50" />
              <Benefit icon={Shield} title="10 Jaar Garantie" description="Gecertificeerde veiligheid met 24/7 monitoring." color="text-blue-600" bg="bg-blue-50" />
              <Benefit icon={Clock} title="Snel Geïnstalleerd" description="Binnen 4 weken operationeel in heel Limburg." color="text-quatt-orange" bg="bg-orange-50" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="px-10">
                Adviesgesprek Plannen
              </Button>
              <Button href="/products/alphaess/smile-g3-t10-11-55kwh" variant="outline" size="lg">
                Bekijk Specificaties
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Card padding="none" className="overflow-hidden rounded-[3rem] shadow-2xl shadow-orange-100 border-none group">
              <img
                src="/images/products/thuisbatterij/alphaess/alpha-ess-thuisbatterij-3580x3580.webp"
                alt="AlphaESS Thuisbatterij"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-8 left-8">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Terugverdientijd</p>
                  <p className="text-3xl font-black text-quatt-dark">4-7 Jaar</p>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-quatt-dark/80 to-transparent">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-quatt-orange flex items-center justify-center">
                    <Check className="h-6 w-6" />
                  </div>
                  <p className="font-bold text-lg">Inclusief 21% BTW teruggaaf hulp</p>
                </div>
              </div>
            </Card>

            {/* Floating Spec Detail */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden xl:block border border-gray-100">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Capaciteit</p>
                  <p className="text-xl font-bold text-quatt-dark">11,55 kWh</p>
                </div>
                <div className="w-px h-10 bg-gray-100" />
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Vermogen</p>
                  <p className="text-xl font-bold text-quatt-dark">10 kW</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Benefit({ icon: Icon, title, description, color, bg }: { icon: any, title: string, description: string, color: string, bg: string }) {
  return (
    <div className="flex gap-5 group">
      <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-quatt-dark mb-1">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
import { useState } from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/ui/Button';
import { estimateBattery, type BatteryEstimateInput } from '../utils/batteryEstimate';

const fields: { key: keyof BatteryEstimateInput; label: string; defaultValue: string; max?: number; step?: string }[] = [
  { key: 'annualConsumption', label: 'Jaarlijks stroomverbruik (kWh)', defaultValue: '4500' },
  { key: 'solarProduction', label: 'Jaaropbrengst zonnepanelen (kWh)', defaultValue: '5000' },
  { key: 'currentSelfUsePercent', label: 'Direct eigen gebruik van zonnestroom (%)', defaultValue: '30', max: 100 },
  { key: 'additionalSelfUsePercent', label: 'Extra deel van de jaaropbrengst naar de batterij (%)', defaultValue: '30', max: 100 },
  { key: 'roundTripEfficiencyPercent', label: 'Laad- en ontlaadrendement samen (%)', defaultValue: '90', max: 100 },
  { key: 'importPrice', label: 'Prijs ingekochte stroom (€/kWh)', defaultValue: '0.30', step: '0.01' },
  { key: 'exportPrice', label: 'Vergoeding teruggeleverde stroom (€/kWh)', defaultValue: '0.05', step: '0.01' },
  { key: 'investment', label: 'Totale investering inclusief btw en installatie (€)', defaultValue: '6000' },
];
const money = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
export default function ThuisbatterijCalculator() {
  const [values, setValues] = useState<Record<string, string>>(Object.fromEntries(fields.map(f => [f.key, f.defaultValue])));
  const number = (key: keyof BatteryEstimateInput) => Number(values[key]);
  const valid = fields.every(f => values[f.key].trim() !== '' && Number.isFinite(number(f.key)) && number(f.key) >= 0 && (f.max === undefined || number(f.key) <= f.max));
  const result = estimateBattery({ annualConsumption: number('annualConsumption'), solarProduction: number('solarProduction'), currentSelfUsePercent: number('currentSelfUsePercent'), additionalSelfUsePercent: number('additionalSelfUsePercent'), roundTripEfficiencyPercent: number('roundTripEfficiencyPercent'), importPrice: number('importPrice'), exportPrice: number('exportPrice'), investment: number('investment') });
  return (
    <div className="bg-quatt-warm min-h-screen">
      <MetaTags title="Thuisbatterij calculator: reken uw scenario door" description="Bereken een thuisbatterijscenario met uw verbruik, stroomtarieven en investering. Bekijk de aannames en grenzen van de berekening vanaf 2027." />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Thuisbatterijen', path: '/thuisbatterijen' }, { label: 'Calculator' }]} />
        <header className="max-w-3xl py-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-quatt-dark mb-6">Thuisbatterij calculator: wat betekent uw scenario?</h1>
          <p className="text-lg text-gray-700">Bekijk een rekenvoorbeeld voor meer eigen gebruik van zonnestroom vanaf 2027. Pas alle aannames aan. De ingevulde bedragen zijn voorbeelden en geen offerte of verwachte opbrengst van een specifiek model.</p>
        </header>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <section className="bg-white rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Uw verbruik en aannames</h2>
            <p className="text-gray-600 mb-6">Gebruik uw jaarafrekening en offerte. Het extra aandeel zonnestroom dat u kunt opslaan vraagt een analyse van uw uurverbruik, batterijcapaciteit en vermogen.</p>
            <div className="space-y-5">
              {fields.map(field => <div key={field.key}>
                <label className="block font-medium mb-2" htmlFor={`battery-${field.key}`}>{field.label}</label>
                <input id={`battery-${field.key}`} type="number" min="0" max={field.max} step={field.step || '1'} value={values[field.key]} onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900" />
              </div>)}
            </div>
          </section>
          <section className="bg-quatt-dark text-white rounded-2xl p-6 sm:p-8" aria-live="polite" aria-atomic="true">
            <h2 className="text-2xl font-bold mb-6">Uitkomst van dit rekenvoorbeeld</h2>
            {!valid ? <p>Vul alle velden in met geldige, niet-negatieve getallen. Percentages mogen maximaal 100 zijn.</p> : <>
              <p>Jaarlijks verschil in variabele stroomkosten</p>
              <p className="text-5xl font-bold my-4">{money.format(result.annualBenefit)}</p>
              <p className="text-white/80">Bij {Math.round(result.stored).toLocaleString('nl-NL')} kWh laden uit zonnestroom en {Math.round(result.delivered).toLocaleString('nl-NL')} kWh bruikbare stroom na opslagverlies.</p>
              <p className="mt-6 font-semibold">Eenvoudige terugverdientijd: {result.simplePayback === null ? 'niet berekenbaar met deze invoer' : `${result.simplePayback.toLocaleString('nl-NL', { maximumFractionDigits: 1 })} jaar`}</p>
              <p className="text-white/80 mt-2">Dit is investering gedeeld door het jaarlijkse voordeel. Een uitkomst kan langer zijn dan de levensduur. Degradatie, financiering, onderhoud, vervanging, vaste kosten en wijzigingen in tarieven zijn niet doorgerekend.</p>
            </>}
            <div className="border-t border-white/20 mt-6 pt-6 space-y-4">
              <h3 className="text-xl font-bold">Zo rekent deze calculator</h3>
              <p>Geleverde batterijstroom × inkoopprijs, min de misgelopen terugleververgoeding over de geladen zonnestroom. We begrenzen de opslag op het beschikbare zonneoverschot en het resterende jaarverbruik.</p>
              <p>Dit jaarmodel houdt geen rekening met seizoenen of gelijktijdigheid. Het voorspelt geen opbrengst uit energiehandel en is niet geschikt om een batterij te dimensioneren. Terugleverkosten zijn niet inbegrepen; die kunnen per contract anders uitpakken.</p>
              <p>De salderingsregeling stopt op 1 januari 2027. Gebruik dit rekenvoorbeeld daarom niet voor de besparing onder salderen in 2026. <a className="underline" href="https://www.rijksoverheid.nl/themas/klimaat-milieu-en-natuur/energie-thuis/salderingsregeling">Lees de uitleg van de Rijksoverheid.</a></p>
              <Button href="/contact?onderwerp=thuisbatterij" variant="primary" className="w-full">Laat mijn situatie beoordelen</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

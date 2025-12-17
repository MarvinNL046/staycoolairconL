import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, MapPin, ArrowRight, Phone, CheckCircle, FileText, AlertCircle, Building, Shield, Zap, Home, Clock } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijLokaleRegelgeving = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Regelgeving Limburg' }
  ];

  const regelgevingPunten = [
    {
      icon: CheckCircle,
      titel: 'Geen vergunning nodig',
      beschrijving: 'In heel Limburg geen omgevingsvergunning vereist voor thuisbatterij',
      status: 'groen'
    },
    {
      icon: FileText,
      titel: 'Melding netbeheerder',
      beschrijving: 'Wel meldingsplicht bij Enexis voor aansluiting',
      status: 'blauw'
    },
    {
      icon: Shield,
      titel: 'NEN 1010 verplicht',
      beschrijving: 'Installatie moet voldoen aan elektrotechnische veiligheidsnorm',
      status: 'oranje'
    },
    {
      icon: Building,
      titel: 'Welstandscommissie',
      beschrijving: 'Bij buitenplaatsing mogelijk welstandstoets nodig',
      status: 'geel'
    }
  ];

  const gemeentes = [
    {
      naam: 'Maastricht',
      vergunning: 'Niet nodig',
      melding: 'Ja, bij Enexis',
      bijzonderheden: 'Geen specifieke gemeentelijke eisen',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-maastricht'
    },
    {
      naam: 'Heerlen',
      vergunning: 'Niet nodig',
      melding: 'Ja, bij Enexis',
      bijzonderheden: 'Let op bij monumenten',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-heerlen'
    },
    {
      naam: 'Venlo',
      vergunning: 'Niet nodig',
      melding: 'Ja, bij Enexis',
      bijzonderheden: 'Geen specifieke gemeentelijke eisen',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-venlo'
    },
    {
      naam: 'Roermond',
      vergunning: 'Niet nodig',
      melding: 'Ja, bij Enexis',
      bijzonderheden: 'Geen specifieke gemeentelijke eisen',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-roermond'
    },
    {
      naam: 'Sittard-Geleen',
      vergunning: 'Niet nodig',
      melding: 'Ja, bij Enexis',
      bijzonderheden: 'Geen specifieke gemeentelijke eisen',
      link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-sittard-geleen'
    }
  ];

  const veiligheidsEisen = [
    {
      categorie: 'Plaatsing',
      eisen: [
        'Droge, goed geventileerde ruimte',
        'Temperatuur tussen 5°C en 35°C',
        'Niet in direct zonlicht',
        'Minimaal 30cm afstand tot brandbaar materiaal',
        'Toegankelijk voor onderhoud en inspectie'
      ]
    },
    {
      categorie: 'Elektrische installatie',
      eisen: [
        'Aansluiting door erkend NEN 1010 installateur',
        'Eigen aardlekschakelaar',
        'Juiste kabeldiameters volgens norm',
        'Professionele beveiliging tegen kortsluiting',
        'Correct geïnstalleerde overspanningsbeveiliging'
      ]
    },
    {
      categorie: 'Brandveiligheid',
      eisen: [
        'CE-certificering van de thuisbatterij',
        'Voldoen aan brandveiligheidsklasse',
        'Rookmelder in de buurt aanbevolen',
        'Blusmiddel (bij voorkeur CO2) aanwezig',
        'Noodstroomvoorziening correct aangesloten'
      ]
    }
  ];

  const stappenPlan = [
    {
      stap: '1',
      titel: 'Offerte aanvragen',
      beschrijving: 'Vraag offertes aan bij erkende installateurs',
      tijdsduur: '1 week'
    },
    {
      stap: '2',
      titel: 'Voorinspectie',
      beschrijving: 'Installateur inspecteert meterkast en installatie',
      tijdsduur: '1 uur'
    },
    {
      stap: '3',
      titel: 'Melding Enexis',
      beschrijving: 'Installateur meldt systeem aan bij netbeheerder',
      tijdsduur: '1-2 weken'
    },
    {
      stap: '4',
      titel: 'Installatie',
      beschrijving: 'Professionele installatie door erkend bedrijf',
      tijdsduur: '1 dag'
    },
    {
      stap: '5',
      titel: 'Keuring',
      beschrijving: 'Controleren werking en veiligheid',
      tijdsduur: '1 uur'
    },
    {
      stap: '6',
      titel: 'Documentatie',
      beschrijving: 'Ontvang installatiebewijzen en garantie',
      tijdsduur: 'Direct'
    }
  ];

  const limburgSteden = [
    { naam: 'Maastricht', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-maastricht' },
    { naam: 'Heerlen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-heerlen' },
    { naam: 'Venlo', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-venlo' },
    { naam: 'Roermond', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-roermond' },
    { naam: 'Sittard-Geleen', link: '/seo/pillar-5-thuisbatterijen/thuisbatterij-sittard-geleen' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Regelgeving Limburg - Vergunning & Voorschriften 2026"
        description="Alles over regelgeving voor thuisbatterijen in Limburg. Geen vergunning nodig, maar wel NEN 1010 en melding bij Enexis verplicht. Complete gids per gemeente."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-lokale-regelgeving"
        noIndex={true}
        locationInfo={{ city: 'Limburg', region: 'Limburg' }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-8 h-8" />
            <MapPin className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thuisbatterij Regelgeving in Limburg
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Volledige uitleg over vergunningen, voorschriften en regelgeving voor thuisbatterijen
            in alle gemeenten in Limburg. Geen vergunning nodig, maar wel aan bepaalde eisen voldoen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0462021430"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all"
            >
              Advies over installatie
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Belangrijkste regels */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            De 4 belangrijkste regels in Limburg
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Dit moet je weten voordat je een thuisbatterij installeert
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {regelgevingPunten.map((punt, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md border-2 ${
                  punt.status === 'groen'
                    ? 'bg-green-50 border-green-200'
                    : punt.status === 'blauw'
                    ? 'bg-blue-50 border-blue-200'
                    : punt.status === 'oranje'
                    ? 'bg-orange-50 border-orange-200'
                    : 'bg-yellow-50 border-yellow-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      punt.status === 'groen'
                        ? 'bg-green-100'
                        : punt.status === 'blauw'
                        ? 'bg-blue-100'
                        : punt.status === 'oranje'
                        ? 'bg-orange-100'
                        : 'bg-yellow-100'
                    }`}
                  >
                    <punt.icon
                      className={`w-6 h-6 ${
                        punt.status === 'groen'
                          ? 'text-green-600'
                          : punt.status === 'blauw'
                          ? 'text-blue-600'
                          : punt.status === 'oranje'
                          ? 'text-orange-600'
                          : 'text-yellow-600'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {punt.titel}
                    </h3>
                    <p className="text-gray-700">
                      {punt.beschrijving}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geen vergunning */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Goed nieuws: Geen omgevingsvergunning nodig!
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  In <strong>alle gemeenten in Limburg</strong> heb je geen omgevingsvergunning nodig
                  voor het plaatsen van een thuisbatterij. Dit geldt zowel voor:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Binnenplaatsing (garage, schuur, meterkast)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Buitenplaatsing (tegen gevel, in tuin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zowel particuliere woningen als bedrijfspanden</span>
                  </li>
                </ul>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Let op:</strong> Bij monumenten of beschermde stads- en dorpsgezichten
                    kunnen er aanvullende eisen gelden. Neem dan contact op met je gemeente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wel verplicht */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat is wel verplicht in Limburg?
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Melding bij netbeheerder Enexis
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In heel Limburg is Enexis de netbeheerder. Je installateur moet de thuisbatterij
                    melden bij Enexis voordat of direct na de installatie. Dit is belangrijk voor:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Registratie in het energienetwerk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Veiligheid en capaciteitsbeheer van het net</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Toekomstige netuitbreidingen en planning</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Goede installateur regelt dit:</strong> Een professionele installateur
                      doet de melding bij Enexis voor je. Dit hoort bij de service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Installatie volgens NEN 1010 norm
                  </h3>
                  <p className="text-gray-700 mb-4">
                    De NEN 1010 is de Nederlandse norm voor veilige elektrische installaties.
                    Voor thuisbatterijen betekent dit:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Installatie door erkend elektrotechnisch installateur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Juiste kabeldiameters en beveiligingen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aarding en overspanningsbeveiliging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Elektrisch veilige opstelling</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Let op:</strong> Kies altijd een installateur met NEN 1010 certificering.
                      Doe-het-zelf installatie is niet toegestaan en onveilig!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. CE-markering verplicht
                  </h3>
                  <p className="text-gray-700 mb-4">
                    De thuisbatterij moet een CE-markering hebben. Dit betekent dat het product
                    voldoet aan Europese veiligheids- en kwaliteitseisen. Controleer dit altijd
                    voordat je koopt.
                  </p>
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Check:</strong> Vraag naar het CE-certificaat en eventuele
                      testrapporren (TÜV, VDE, etc.) van de thuisbatterij.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veiligheidseisen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Veiligheidseisen voor thuisbatterijen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {veiligheidsEisen.map((categorie, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-200">
                  {categorie.categorie}
                </h3>
                <ul className="space-y-3">
                  {categorie.eisen.map((eis, eisIndex) => (
                    <li key={eisIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{eis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stappenplan */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Van offerte tot werkende thuisbatterij
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Dit proces doorloop je bij een correcte installatie in Limburg
          </p>

          <div className="space-y-6">
            {stappenPlan.map((stap, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {stap.stap}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {stap.titel}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {stap.tijdsduur}
                      </div>
                    </div>
                    <p className="text-gray-700">
                      {stap.beschrijving}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemeenten overzicht */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Regelgeving per gemeente in Limburg
          </h2>

          <div className="space-y-4">
            {gemeentes.map((gemeente, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {gemeente.naam}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Vergunning:</span>
                        <p className="font-medium text-green-600">{gemeente.vergunning}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Melding:</span>
                        <p className="font-medium text-blue-600">{gemeente.melding}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Bijzonderheden:</span>
                        <p className="font-medium text-gray-900">{gemeente.bijzonderheden}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={gemeente.link}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    Meer info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steden links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Thuisbatterij informatie per stad
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {limburgSteden.map((stad, index) => (
              <Link
                key={index}
                to={stad.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{stad.naam}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde vragen over regelgeving
          </h2>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Moet ik mijn buren informeren over de thuisbatterij?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Dit is juridisch niet verplicht. Het kan wel netjes zijn om je directe buren te
                informeren als je de batterij tegen een gedeelde muur plaatst, vooral vanwege
                eventuele geluidshinder tijdens het laden/ontladen.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Wat als ik in een huurwoning woon?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Je hebt toestemming van de verhuurder nodig. Hoewel je geen gemeentelijke vergunning
                nodig hebt, moet de eigenaar wel akkoord gaan met aanpassingen aan de elektrische
                installatie en plaatsing van de batterij.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Gelden er andere regels voor monumentale panden?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Bij rijksmonumenten of panden in beschermde stads- en dorpsgezichten kunnen extra
                eisen gelden. Neem altijd contact op met je gemeente voordat je begint. Binnenplaatsing
                heeft meestal minder beperkingen dan buitenplaatsing.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Moet ik de gemeente informeren na installatie?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Nee, je hoeft de gemeente niet te informeren. De melding bij netbeheerder Enexis
                is voldoende. Bewaar wel de installatiedocumenten en certificaten voor eventuele
                toekomstige vragen.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Wat zijn de boetes bij niet-conforme installatie?</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-600 mt-4">
                Bij installatie zonder erkend installateur of melding bij Enexis kun je problemen
                krijgen met je verzekering bij schade. Daarnaast loop je veiligheidsrisico's en
                kan Enexis in extreme gevallen aansluiting weigeren. Doe het altijd goed!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zorgeloos thuisbatterij installeren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            StayCool Airco regelt alles voor je: van melding bij Enexis tot NEN 1010
            conforme installatie. Jij hoeft je nergens zorgen over te maken.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all"
            >
              Gratis adviesgesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijLokaleRegelgeving;

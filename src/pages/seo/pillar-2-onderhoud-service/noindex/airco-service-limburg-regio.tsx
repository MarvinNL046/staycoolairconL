import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, CheckCircle, Car, Shield, Zap, AlertCircle, Navigation, FileText } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoServiceLimburgRegioPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Service Limburg', path: '/kennisbank/airco-service-limburg' },
    { label: 'Servicedekking Regio' }
  ];

  const regiozones = [
    {
      zone: 'Zone 1: Centraal Limburg',
      steden: [
        'Maastricht',
        'Meerssen',
        'Valkenburg',
        'Gulpen-Wittem',
        'Margraten',
        'Eijsden-Margraten'
      ],
      responstijd: '24-48 uur',
      spoedservice: 'Beschikbaar',
      color: 'green',
      icon: Zap,
      kenmerken: [
        'Snelste responstijd',
        'Spoedservice binnen 4 uur mogelijk',
        'Vaste servicemonteur',
        'Grootste dekking',
        'Meeste serviceafspraken'
      ]
    },
    {
      zone: 'Zone 2: Zuid-Limburg',
      steden: [
        'Heerlen',
        'Kerkrade',
        'Landgraaf',
        'Brunssum',
        'Simpelveld',
        'Nuth',
        'Beek',
        'Stein'
      ],
      responstijd: '24-48 uur',
      spoedservice: 'Beschikbaar',
      color: 'blue',
      icon: Shield,
      kenmerken: [
        'Uitgebreide dekking Parkstad',
        'Spoedservice binnen 6 uur',
        'Ervaring met monumentale panden',
        'Specialisatie in energiezuinige systemen',
        'Kennis lokale bouwvoorschriften'
      ]
    },
    {
      zone: 'Zone 3: Midden-Limburg',
      steden: [
        'Sittard-Geleen',
        'Born',
        'Susteren',
        'Echt-Susteren',
        'Roermond',
        'Weert'
      ],
      responstijd: '48-72 uur',
      spoedservice: 'Beperkt beschikbaar',
      color: 'yellow',
      icon: Car,
      kenmerken: [
        'Goede dekking centraal Limburg',
        'Spoedservice in overleg',
        'Flexibele planning',
        'Uitgebreide regio dekking',
        'Combinatieritten mogelijk'
      ]
    },
    {
      zone: 'Zone 4: Noord-Limburg',
      steden: [
        'Venlo',
        'Venray',
        'Horst aan de Maas',
        'Peel en Maas',
        'Beesel',
        'Bergen'
      ],
      responstijd: '48-96 uur',
      spoedservice: 'Op aanvraag',
      color: 'orange',
      icon: Navigation,
      kenmerken: [
        'Dekking Noord-Limburg',
        'Vaste servicedagen',
        'Planning in overleg',
        'Groepsplanningen voordelig',
        'Samenwerking lokale partners'
      ]
    }
  ];

  const serviceoverzicht = [
    {
      stad: 'Maastricht',
      inwoners: '~122.000',
      responstijd: '24 uur',
      spoedservice: 'Ja',
      monteurs: 2,
      bijzonderheden: 'Hoofdlocatie, snelste service, meeste ervaring',
      actieveKlanten: '300+'
    },
    {
      stad: 'Heerlen',
      inwoners: '~86.000',
      responstijd: '24-48 uur',
      spoedservice: 'Ja',
      monteurs: 2,
      bijzonderheden: 'Specialisatie monumentale panden, energiezuinige systemen',
      actieveKlanten: '200+'
    },
    {
      stad: 'Sittard-Geleen',
      inwoners: '~92.000',
      responstijd: '48 uur',
      spoedservice: 'Beperkt',
      monteurs: 1,
      bijzonderheden: 'Combinatieritten mogelijk, flexibele planning',
      actieveKlanten: '150+'
    },
    {
      stad: 'Roermond',
      inwoners: '~58.000',
      responstijd: '48-72 uur',
      spoedservice: 'Op aanvraag',
      monteurs: 1,
      bijzonderheden: 'Vaste servicedagen, groepsplanningen',
      actieveKlanten: '100+'
    },
    {
      stad: 'Venlo',
      inwoners: '~101.000',
      responstijd: '72 uur',
      spoedservice: 'Op aanvraag',
      monteurs: 1,
      bijzonderheden: 'Uitgebreide dekking Noord-Limburg',
      actieveKlanten: '80+'
    },
    {
      stad: 'Weert',
      inwoners: '~50.000',
      responstijd: '48-72 uur',
      spoedservice: 'Beperkt',
      monteurs: 1,
      bijzonderheden: 'Combinatie met Roermond ritten',
      actieveKlanten: '75+'
    },
    {
      stad: 'Kerkrade',
      inwoners: '~45.000',
      responstijd: '24-48 uur',
      spoedservice: 'Ja',
      monteurs: 1,
      bijzonderheden: 'Deel van Parkstad dekking',
      actieveKlanten: '90+'
    },
    {
      stad: 'Landgraaf',
      inwoners: '~37.000',
      responstijd: '24-48 uur',
      spoedservice: 'Ja',
      monteurs: 1,
      bijzonderheden: 'Deel van Parkstad dekking',
      actieveKlanten: '70+'
    },
    {
      stad: 'Brunssum',
      inwoners: '~27.000',
      responstijd: '24-48 uur',
      spoedservice: 'Ja',
      monteurs: 1,
      bijzonderheden: 'Deel van Parkstad dekking',
      actieveKlanten: '60+'
    },
    {
      stad: 'Venray',
      inwoners: '~43.000',
      responstijd: '72-96 uur',
      spoedservice: 'Op aanvraag',
      monteurs: 1,
      bijzonderheden: 'Combinatie met Venlo ritten',
      actieveKlanten: '50+'
    }
  ];

  const spoedserviceInfo = [
    {
      type: 'Acute Storing',
      omschrijving: 'Systeem werkt volledig niet meer',
      responstijd: 'Zone 1-2: 4-6 uur | Zone 3-4: In overleg',
      voorwaarden: ['Servicecontract', 'Binnen kantooruren', 'Technische oorzaak'],
      kosten: 'Volgens contract of €150 spoedtoeslag'
    },
    {
      type: 'Ernstige Storing',
      omschrijving: 'Systeem werkt beperkt of met grote problemen',
      responstijd: 'Zone 1-2: 24 uur | Zone 3-4: 48 uur',
      voorwaarden: ['Servicecontract of reguliere klant', 'Binnen 2 werkdagen', 'Veiligheidsrisico'],
      kosten: 'Volgens contract of €95 spoedtoeslag'
    },
    {
      type: 'Reguliere Service',
      omschrijving: 'Geplande servicebeurt of kleine storing',
      responstijd: 'Volgens zoneplanning (24-96 uur)',
      voorwaarden: ['Normale planning', 'Geen urgentie', 'Flexibele datum'],
      kosten: 'Volgens contract of reguliere prijzen'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Service Limburg per Regio | Responstijden & Dekking | StayCool"
        description="Servicedekking in heel Limburg. Van Maastricht tot Venlo - responstijden, spoedservice en lokale expertise. 24-48 uur service."
        canonicalUrl="https://staycoolairco.nl/airco-service/noindex/limburg-regio"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4">
            Servicedekking
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Service in Heel Limburg
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Van Maastricht tot Venlo - lokale expertise met snelle responstijden
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-blue-200">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>10+ Steden</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>24-96 uur responstijd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>1200+ Actieve klanten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Lokale service met garantie</h3>
                <p className="text-gray-700">
                  StayCool Airco bedient heel Limburg vanuit onze hoofdlocatie in Maastricht. We werken met vaste servicemonteurs per regio, zodat u altijd snel en deskundig geholpen wordt. Responstijden variëren per zone, maar overal in Limburg garanderen wij professionele service.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4 Zones</div>
              <div className="text-gray-600">Servicedekking heel Limburg</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">24-96u</div>
              <div className="text-gray-600">Responstijd afhankelijk van zone</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">1200+</div>
              <div className="text-gray-600">Actieve servicecontracten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Zones */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Servicedekking per Zone
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {regiozones.map((zone, index) => {
              const Icon = zone.icon;
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                  zone.color === 'green' ? 'border-green-600' :
                  zone.color === 'blue' ? 'border-blue-600' :
                  zone.color === 'yellow' ? 'border-yellow-600' :
                  'border-orange-600'
                }`}>
                  <div className="flex items-start mb-4">
                    <div className={`rounded-lg p-3 mr-4 ${
                      zone.color === 'green' ? 'bg-green-100' :
                      zone.color === 'blue' ? 'bg-blue-100' :
                      zone.color === 'yellow' ? 'bg-yellow-100' :
                      'bg-orange-100'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        zone.color === 'green' ? 'text-green-600' :
                        zone.color === 'blue' ? 'text-blue-600' :
                        zone.color === 'yellow' ? 'text-yellow-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{zone.zone}</h3>
                      <div className="flex flex-col gap-2 text-sm mb-3">
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span><strong>Responstijd:</strong> {zone.responstijd}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Zap className="h-4 w-4 mr-2 text-gray-500" />
                          <span><strong>Spoedservice:</strong> {zone.spoedservice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Steden in deze zone:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {zone.steden.map((stad, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                          <span>{stad}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {zone.kenmerken.map((kenmerk, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{kenmerk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Overzicht Per Stad */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Service Per Stad
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Gedetailleerd overzicht van onze servicedekking in de belangrijkste steden
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="px-4 py-3 text-left font-bold">Stad</th>
                    <th className="px-4 py-3 text-left font-bold">Responstijd</th>
                    <th className="px-4 py-3 text-left font-bold">Spoedservice</th>
                    <th className="px-4 py-3 text-left font-bold">Bijzonderheden</th>
                    <th className="px-4 py-3 text-left font-bold">Klanten</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceoverzicht.map((stad, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="font-bold text-gray-900">{stad.stad}</div>
                        <div className="text-xs text-gray-600">{stad.inwoners} inwoners</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-sm text-gray-700">{stad.responstijd}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          stad.spoedservice === 'Ja' ? 'bg-green-100 text-green-800' :
                          stad.spoedservice === 'Beperkt' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {stad.spoedservice}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {stad.bijzonderheden}
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-medium text-blue-600">{stad.actieveKlanten}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Totaal 1200+ actieve servicecontracten in heel Limburg
          </div>
        </div>
      </section>

      {/* Spoedservice Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Spoedservice & Responstijden
          </h2>

          <div className="space-y-6">
            {spoedserviceInfo.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.type}</h3>
                    <p className="text-gray-700">{service.omschrijving}</p>
                  </div>
                  <div className="flex items-center text-blue-600 ml-4">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Responstijd:</h4>
                    <p className="text-gray-700">{service.responstijd}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Kosten:</h4>
                    <p className="text-gray-700">{service.kosten}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Voorwaarden:</h4>
                  <ul className="space-y-1">
                    {service.voorwaarden.map((voorwaarde, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{voorwaarde}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Servicecontract = Voorrang</h3>
                <p className="text-gray-700">
                  Met een servicecontract krijgt u altijd voorrang bij storingen en snellere responstijden. In Zone 1 en 2 kunnen we bij acute storingen vaak binnen 4-6 uur ter plaatse zijn voor contracthouders. Zonder contract is de responstijd langer en geldt er een spoedtoeslag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tips Voor Snellere Service
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="font-bold text-gray-900 text-lg">Voor Spoedservice</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Sluit een servicecontract af voor voorrang</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Bel binnen kantooruren (ma-vr 8:00-17:00)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Geef duidelijk door wat het probleem is</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Zorg voor toegang tot binnen- en buitenunit</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Woon in Zone 1 of 2 voor snelste service</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="font-bold text-gray-900 text-lg">Voor Geplande Service</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Plan ruim van tevoren (2-4 weken vooruit)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Kies voor vaste servicedagen in uw regio</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Combineer met buren voor groepskorting</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Plan buiten zomermaanden (minder drukte)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Laat ons proactief bellen met servicecontract</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regionaal Kaartje */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Onze Servicedekking Visueel
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-600">
                <div className="text-2xl font-bold text-green-600 mb-2">Zone 1</div>
                <div className="text-sm text-gray-700 mb-1">Centraal Limburg</div>
                <div className="text-xs text-gray-600">24-48 uur</div>
                <div className="text-xs font-medium text-green-600 mt-2">Snelste service</div>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-600">
                <div className="text-2xl font-bold text-blue-600 mb-2">Zone 2</div>
                <div className="text-sm text-gray-700 mb-1">Zuid-Limburg</div>
                <div className="text-xs text-gray-600">24-48 uur</div>
                <div className="text-xs font-medium text-blue-600 mt-2">Parkstad</div>
              </div>

              <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-600">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Zone 3</div>
                <div className="text-sm text-gray-700 mb-1">Midden-Limburg</div>
                <div className="text-xs text-gray-600">48-72 uur</div>
                <div className="text-xs font-medium text-yellow-600 mt-2">Centraal</div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-600">
                <div className="text-2xl font-bold text-orange-600 mb-2">Zone 4</div>
                <div className="text-sm text-gray-700 mb-1">Noord-Limburg</div>
                <div className="text-xs text-gray-600">48-96 uur</div>
                <div className="text-xs font-medium text-orange-600 mt-2">Noord</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                <strong>Hoofdlocatie:</strong> Maastricht | <strong>Dekking:</strong> Heel Limburg | <strong>Monteurs:</strong> 8
              </p>
              <p className="text-sm text-gray-600">
                Alle responstijden zijn indicatief voor reguliere service. Spoedservice kan sneller indien beschikbaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar hoofdpagina */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer over airco service</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/kennisbank/airco-service-limburg" className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-600 mb-2">→ Airco Service Limburg</h3>
              <p className="text-gray-600">Complete informatie over airco service in Limburg</p>
            </Link>
            <Link to="/contact" className="p-6 bg-gradient-to-br from-green-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <h3 className="font-bold text-green-600 mb-2">→ Service Aanvragen</h3>
              <p className="text-gray-600">Plan service in uw regio met optimale responstijd</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Service Nodig in Limburg?</h2>
          <p className="text-xl mb-8">
            Professionele airco service in uw regio - van Maastricht tot Venlo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 - 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              <FileText className="h-5 w-5 mr-2" />
              Service Aanvragen
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            24-96 uur responstijd | Spoedservice beschikbaar | 1200+ Tevreden klanten
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoServiceLimburgRegioPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, ArrowRight, Phone, CheckCircle, Settings, Clock, Home, FileCheck, Wrench, Shield, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijInstallerenStappen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Installatie stappen' }
  ];

  const installatieStappen = [
    {
      nummer: 1,
      titel: "Locatie bepalen en voorbereiden",
      duur: "30-60 minuten",
      beschrijving: "De eerste stap is het bepalen van de optimale locatie voor uw thuisbatterij. Dit is cruciaal voor de prestaties en levensduur.",
      details: [
        "Kies een droge, goed geventileerde ruimte",
        "Temperatuur tussen 10-25°C is ideaal",
        "Vermijd directe zonlicht en vochtbronnen",
        "Zorg voor voldoende ruimte rondom (minimaal 30cm)",
        "Controleer draagkracht vloer (batterij weegt 100-300kg)",
        "Meet en markeer bevestigingspunten aan de muur"
      ],
      tips: [
        "Meterkast in de buurt = kortere bekabeling = minder kosten",
        "Kelderruimte of bijkeuken zijn vaak geschikte locaties",
        "Overleg met installateur over specifieke eisen van uw model"
      ]
    },
    {
      nummer: 2,
      titel: "Elektrische voorbereidingen treffen",
      duur: "1-2 uur",
      beschrijving: "Voor de installateur komt, kunnen enkele voorbereidingen getroffen worden aan de elektrische installatie.",
      details: [
        "Controleer beschikbare ruimte in meterkast",
        "Zorg dat hoofdschakelaar toegankelijk is",
        "Inventariseer bestaande groepen en belasting",
        "Check of er een aardlekschakelaar aanwezig is",
        "Maak foto's van huidige meterkast-situatie",
        "Verwijder obstakels in het werkgebied"
      ],
      tips: [
        "Slimme meter is vaak verplicht voor optimaal gebruik",
        "Aparte groep voor thuisbatterij wordt meestal aangeraden",
        "Vraag vooraf een checklist aan uw installateur"
      ]
    },
    {
      nummer: 3,
      titel: "Montage van de thuisbatterij",
      duur: "2-4 uur",
      beschrijving: "De professionele installateur plaatst de thuisbatterij volgens fabrieksvoorschriften en veiligheidsnormen.",
      details: [
        "Batterijmodule wordt aan de muur bevestigd of op statief geplaatst",
        "Bevestigingsmaterialen geschikt voor ondergrond",
        "Waterpas plaatsen is cruciaal voor batterijprestaties",
        "Veiligheidsafstanden worden nauwkeurig aangehouden",
        "Alle modules worden stevig en niveau bevestigd",
        "Controle op trilling en stabiliteit"
      ],
      tips: [
        "Laat de installateur werken volgens NEN 1010 norm",
        "Vraag naar garantievoorwaarden m.b.t. installatie",
        "Maak foto's van de montage voor documentatie"
      ]
    },
    {
      nummer: 4,
      titel: "Elektrische aansluitingen maken",
      duur: "2-3 uur",
      beschrijving: "De cruciale fase waarin alle elektrische verbindingen worden gelegd en gecontroleerd.",
      details: [
        "DC-kabels van zonnepanelen naar omvormer/batterij",
        "AC-kabels van thuisbatterij naar meterkast",
        "Dataverbinding voor monitoring en sturing",
        "Aarding conform NEN-normen",
        "Installatie van vereiste beveiligingen",
        "Aansluiting op thuisnetwerk voor wifi/ethernet"
      ],
      tips: [
        "Gebruik alleen gekeurde kabels en materialen",
        "Laat alle verbindingen labelen voor toekomstige onderhoud",
        "Test alle verbindingen voor inbedrijfstelling"
      ]
    },
    {
      nummer: 5,
      titel: "Instellingen en configuratie",
      duur: "1-2 uur",
      beschrijving: "De software-kant van de installatie: alles instellen voor optimale werking.",
      details: [
        "Systeem verbinden met wifi/internet",
        "Installeren van monitoring-app op smartphone",
        "Configureren van laad- en ontlaadtijden",
        "Instellen van noodstroom-functie (indien aanwezig)",
        "Koppelen met dynamische energietarieven",
        "Optimalisatie-algoritmes activeren"
      ],
      tips: [
        "Neem tijd voor uitleg van de app-functionaliteiten",
        "Maak screenshot van belangrijke instellingen",
        "Vraag naar optimale configuratie voor uw situatie"
      ]
    },
    {
      nummer: 6,
      titel: "Testen en inbedrijfstelling",
      duur: "1-2 uur",
      beschrijving: "Grondig testen of alle systemen correct functioneren voordat de installateur vertrekt.",
      details: [
        "Laadcyclus testen met zonnepanelen",
        "Ontlaadcyclus testen naar huishouden",
        "Noodstroom-functie controleren (indien van toepassing)",
        "Monitoring-systeem valideren",
        "Veiligheidsvoorzieningen testen",
        "Meterstanden noteren en vastleggen"
      ],
      tips: [
        "Laat verschillende scenario's doorlopen",
        "Vraag wat te doen bij foutmeldingen",
        "Test ook de nachtelijke werking"
      ]
    },
    {
      nummer: 7,
      titel: "Documentatie en oplevering",
      duur: "30 minuten",
      beschrijving: "Administratieve afronding en kennisoverdracht voor zorgeloos gebruik.",
      details: [
        "Ontvangen van garantiedocumenten",
        "Handleidingen en veiligheidsvoorschriften",
        "Gebruikersinstructie en do's en don'ts",
        "Contact voor service en onderhoud",
        "Registratie bij fabrikant voor garantie",
        "Keuring en installatiecertificaat"
      ],
      tips: [
        "Bewaar alle documenten op een veilige plek",
        "Maak digitale kopieën van belangrijke papieren",
        "Noteer servicenummer en garantieperiode in agenda"
      ]
    }
  ];

  const veelgesteldeVragen = [
    {
      vraag: "Hoe lang duurt een complete installatie?",
      antwoord: "Een standaard thuisbatterij-installatie neemt gemiddeld 6-8 uur in beslag. Dit kan variëren afhankelijk van de complexiteit van uw elektrische installatie, de grootte van het batterijsysteem en eventuele aanpassingen aan de meterkast."
    },
    {
      vraag: "Moet ik zelf iets voorbereiden?",
      antwoord: "Zorg dat de installatielocatie vrij is van obstakels, maak de meterkast toegankelijk, en zorg dat u thuis bent tijdens de volledige installatie. De installateur neemt alle benodigde materialen mee."
    },
    {
      vraag: "Is er een keuring nodig na installatie?",
      antwoord: "Ja, een gediplomeerd installateur moet de installatie keuren conform NEN 1010 en een installatiecertificaat afgeven. Dit is verplicht voor verzekering en garantie."
    },
    {
      vraag: "Kan ik de batterij zelf plaatsen?",
      antwoord: "Nee, dit wordt sterk afgeraden en valt onder 'werken onder spanning'. Alleen gecertificeerde installateurs mogen thuisbatterijen installeren. Zelfinstallatie leidt tot garantieverlies en is gevaarlijk."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Installeren: Stap-voor-Stap Installatieproces | StayCool Airco"
        description="Complete handleiding voor het installeren van een thuisbatterij. Van locatie kiezen tot inbedrijfstelling - alle 7 stappen uitgelegd door professionals."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-installeren-stappen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-8 h-8" />
            <span className="text-blue-200 font-semibold">Installatie Handleiding</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thuisbatterij Installeren in 7 Stappen
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Van locatie bepalen tot inbedrijfstelling - alles wat u moet weten over het installatieproces van uw thuisbatterij
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6-8 uur totale duur</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Professionele installatie</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              <span>Inclusief keuring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Belangrijk te weten</h3>
                <p className="text-gray-700">
                  Het installeren van een thuisbatterij is specialistisch werk dat alleen door gecertificeerde installateurs mag worden uitgevoerd. Deze handleiding geeft u inzicht in het proces, maar voer de installatie nooit zelf uit. Dit is gevaarlijk en leidt tot garantieverlies.
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom een professionele installatie cruciaal is</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Een thuisbatterij is een complex systeem dat werkt met hoogspanning en precisie-elektronica. Een verkeerde installatie kan leiden tot:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Gevaarlijke situaties zoals brand of elektrische schokken</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Schade aan de batterij en verlies van garantie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Suboptimale prestaties en lagere opbrengsten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Problemen met verzekering en vergunningen</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Bij StayCool Airco werken we alleen met gecertificeerde installateurs die voldoen aan alle NEN-normen en jarenlange ervaring hebben met thuisbatterij-installaties in Limburg en omgeving.
            </p>
          </div>
        </div>
      </section>

      {/* Installatiestappen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Het complete installatieproces</h2>

          <div className="space-y-8">
            {installatieStappen.map((stap, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      {stap.nummer}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{stap.titel}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-blue-100">Geschatte duur: {stap.duur}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{stap.beschrijving}</p>

                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Wat gebeurt er in deze stap:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {stap.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Tips voor deze stap:
                    </h4>
                    <ul className="space-y-1">
                      {stap.tips.map((tip, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist voor oplevering */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist bij oplevering</h2>
          <p className="text-gray-700 mb-6">
            Controleer bij oplevering of u het volgende heeft ontvangen en begrepen:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                Documentatie
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Garantiebewijs en registratie</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Installatiecertificaat (NEN 1010)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Gebruikershandleiding in het Nederlands</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Technische specificaties</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Contactgegevens voor service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                Kennisoverdracht
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Werking van het systeem uitgelegd</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Bediening van de monitoring-app</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Wat te doen bij foutmeldingen</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Onderhoudsinstructies gekregen</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Veiligheidsvoorschriften begrepen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over installatie</h2>

          <div className="space-y-4">
            {veelgesteldeVragen.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-blue-600">Q:</span>
                  {item.vraag}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-6">
                  <span className="font-bold text-gray-900">A:</span> {item.antwoord}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Na de installatie */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De eerste weken na installatie</h2>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              De eerste weken zijn belangrijk om uw thuisbatterij te leren kennen en te optimaliseren:
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Week 1-2: Observatie</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Monitor dagelijks de laad- en ontlaadcycli via de app</li>
                <li className="text-gray-700">Let op foutmeldingen of afwijkingen</li>
                <li className="text-gray-700">Controleer of de batterij synchroniseert met dynamische tarieven</li>
                <li className="text-gray-700">Vergelijk uw energieverbruik voor en na installatie</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Week 3-4: Optimalisatie</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Pas laadtijden aan op basis van uw verbruikspatroon</li>
                <li className="text-gray-700">Experimenteer met instellingen voor maximale besparing</li>
                <li className="text-gray-700">Analyseer de monitoring-data voor verbeterpunten</li>
                <li className="text-gray-700">Overleg eventueel met de installateur over fine-tuning</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Gratis nacontrole</h3>
              <p className="text-gray-700">
                Bij StayCool Airco bieden wij een gratis nacontrole na 4-6 weken. Onze specialist controleert of alles optimaal functioneert en helpt u met eventuele vragen of aanpassingen. Dit is onderdeel van onze service voor een zorgeloze thuisbatterij-ervaring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde informatie */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde informatie</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/thuisbatterijen" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Battery className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Thuisbatterijen overzicht</span>
              </div>
              <p className="text-gray-600 text-sm">Alle informatie over thuisbatterijen, merken en mogelijkheden</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/thuisbatterij-installatie-limburg" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Installatie in Limburg</span>
              </div>
              <p className="text-gray-600 text-sm">Lokale installateurs en specifieke informatie voor Limburg</p>
            </Link>

            <Link to="/contact" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Installatie aanvragen</span>
              </div>
              <p className="text-gray-600 text-sm">Plan een afspraak met onze gecertificeerde installateurs</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-werking-uitgelegd" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Settings className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Hoe werkt een thuisbatterij?</span>
              </div>
              <p className="text-gray-600 text-sm">Technische uitleg voor beginners over de werking</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Professionele installatie door StayCool Airco
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Onze gecertificeerde installateurs zorgen voor een veilige en optimale installatie volgens alle normen
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Plan een installatie
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31612345678"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Direct bellen
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            ✓ NEN-gecertificeerde installateurs ✓ Gratis nacontrole ✓ Complete oplevering met keuring
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijInstallerenStappen;

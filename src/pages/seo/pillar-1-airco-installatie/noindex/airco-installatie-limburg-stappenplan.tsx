import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Wrench, Phone, ArrowRight, Calendar, Home, FileText, ClipboardCheck, Users, Zap, ThermometerSun, Shield, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import HowToSchema from '../../../../components/SEO/HowToSchema';

const AircoInstallatieLimburgStappenplanPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie Limburg', path: '/kennisbank/airco-installatie-limburg' },
    { label: 'Stappenplan' }
  ];

  const stappen = [
    {
      nummer: 1,
      titel: 'Eerste Contact & Intakegesprek',
      tijdsduur: '15-30 minuten',
      icon: Phone,
      beschrijving: 'Het proces start met uw telefoontje of online aanvraag.',
      details: [
        'Telefonisch of via contactformulier uw wensen doorgeven',
        'Inventarisatie van ruimtes die gekoeld moeten worden',
        'Bespreking van uw wensen en budget',
        'Planning van een kosteloos adviesgesprek op locatie',
        'Ontvangst van bevestigingsmail met afspraakdetails'
      ],
      tips: [
        'Bereid vragen voor over energieverbruik en capaciteit',
        'Maak foto\'s van de te koelen ruimtes',
        'Noteer afmetingen van kamers alvast'
      ]
    },
    {
      nummer: 2,
      titel: 'Locatiebezoek & Advies',
      tijdsduur: '45-90 minuten',
      icon: Home,
      beschrijving: 'Een ervaren adviseur komt langs voor een grondige inspectie.',
      details: [
        'Inspectie van alle te koelen ruimtes',
        'Beoordeling van buitengevel en installatiemogelijkheden',
        'Meting van ruimtes en berekening koelvermogen',
        'Controle elektrische installatie en meterkast',
        'Bespreking van verschillende aircosystemen en merken',
        'Advies over optimale plaatsing binnen- en buitenunits',
        'Uitleg over energieverbruik en SCOP-waarden'
      ],
      tips: [
        'Zorg dat alle ruimtes toegankelijk zijn',
        'Bespreek eventuele beperkingen (monumentale panden, VVE-regels)',
        'Vraag naar subsidiemogelijkheden',
        'Informeer naar onderhoudscontracten'
      ]
    },
    {
      nummer: 3,
      titel: 'Offerte & Specificaties',
      tijdsduur: '2-5 werkdagen',
      icon: FileText,
      beschrijving: 'U ontvangt een gedetailleerde schriftelijke offerte.',
      details: [
        'Overzicht van aanbevolen aircosysteem(en)',
        'Specificaties per binnen- en buitenunit',
        'Gedetailleerde kostenopstelling (materiaal + arbeid)',
        'Verwachte installatieduur',
        'Garantievoorwaarden en onderhoudsopties',
        'Energielabel en verwacht verbruik',
        'Betalingsvoorwaarden'
      ],
      tips: [
        'Vergelijk specificaties met uw wensen uit stap 1',
        'Stel vragen over onduidelijkheden',
        'Vraag referenties van vergelijkbare installaties',
        'Check of offerteprijs all-in is (inclusief leidingwerk, elektrische aansluitingen)'
      ]
    },
    {
      nummer: 4,
      titel: 'Akkoord & Planning',
      tijdsduur: '1-3 werkdagen',
      icon: CheckCircle,
      beschrijving: 'Na uw akkoord plannen we de installatie in.',
      details: [
        'Ondertekening offerte (digitaal mogelijk)',
        'Bestelling van materialen bij leverancier',
        'Planning installatiedatum in overleg',
        'Bevestiging per mail met installatieplanning',
        'Eventuele vergunningen of VVE-toestemmingen aanvragen',
        'Voorbereiding installatietekeningen'
      ],
      tips: [
        'Plan installatie niet in vakantieperiode',
        'Houd rekening met 2-4 weken levertijd materialen',
        'Informeer buren bij appartementen/rijtjeshuizen',
        'Regel toegang voor installateurs (bij afwezigheid)'
      ]
    },
    {
      nummer: 5,
      titel: 'Voorbereiding Installatiedag',
      tijdsduur: '1 dag voor installatie',
      icon: ClipboardCheck,
      beschrijving: 'Laatste controles en voorbereidingen voor een vlotte installatie.',
      details: [
        'Bevestigingsmail/telefoontje van StayCool',
        'Aankomsttijd installatieteam wordt doorgegeven',
        'Controleer of materialen compleet zijn',
        'Ruim installatielocaties vrij',
        'Zorg voor toegang tot meterkast',
        'Parkeerplaats voor bedrijfswagen regelen'
      ],
      tips: [
        'Bescherm vloeren en meubels met oude lakens',
        'Verwijder breekbare voorwerpen uit werkgebied',
        'Zorg dat huisdieren elders verblijven',
        'Maak koffie en thee beschikbaar voor installateurs',
        'Plan zelf thuis te zijn of regel vervangende contactpersoon'
      ]
    },
    {
      nummer: 6,
      titel: 'Installatie Buitenunit',
      tijdsduur: '2-4 uur',
      icon: Wrench,
      beschrijving: 'Het monteren van de buitenunit en aanleg leidingwerk.',
      details: [
        'Plaatsing en bevestiging wandconsole of frame',
        'Montage buitenunit op veilige en waterpas wijze',
        'Boren van doorgangen door gevel (kernboring)',
        'Aanleg koelleidingen naar binnenunits',
        'Elektrische bekabeling vanaf meterkast',
        'Condensafvoer aanleggen',
        'Isolatie en bescherming leidingwerk'
      ],
      verwacht: [
        'Boorgeluid tijdens kernboringen (15-30 min per boring)',
        'Mogelijk stof bij boren (wordt afgeschermd)',
        'Installateurs werken binnen én buiten',
        'Ladder of steiger bij hooggelegen buitenunits'
      ]
    },
    {
      nummer: 7,
      titel: 'Installatie Binnenunit(s)',
      tijdsduur: '1-2 uur per unit',
      icon: ThermometerSun,
      beschrijving: 'Montage van de binnenunits en aansluiting op het systeem.',
      details: [
        'Markering optimale positie binnenunit(s)',
        'Montage wandbeugel of inbouwframe',
        'Ophangen binnenunit(en)',
        'Aansluiting koelleidingen en elektrische bedrading',
        'Condensafvoer aansluiten',
        'Vacuümtrekken van het koelsysteem',
        'Vullen met koudemiddel',
        'Eerste testrun uitvoeren'
      ],
      verwacht: [
        'Precisiewerk voor waterpas montage',
        'Installatietijd hangt af van aantal units',
        'Testgeluid van systemen (circa 15 minuten)',
        'Mogelijk kleine reparaties aan gipsplaten'
      ]
    },
    {
      nummer: 8,
      titel: 'Inbedrijfstelling & Instructie',
      tijdsduur: '30-60 minuten',
      icon: Zap,
      beschrijving: 'Het systeem wordt getest en u krijgt uitgebreide uitleg.',
      details: [
        'Volledige systeemtest alle functies (koelen, verwarmen)',
        'Controle koudemiddeldruk en temperaturen',
        'Uitleg bediening afstandsbediening',
        'Demonstratie verschillende standen (cool, heat, dry, fan)',
        'Uitleg onderhoudstips en filters reinigen',
        'WiFi-module koppelen (indien van toepassing)',
        'App installeren en configureren op uw smartphone',
        'Beantwoorden van al uw vragen'
      ],
      tips: [
        'Maak notities tijdens instructie',
        'Test alle functies onder begeleiding',
        'Vraag naar optimale temperatuurinstellingen',
        'Noteer servicetelefoon voor eventuele vragen'
      ]
    },
    {
      nummer: 9,
      titel: 'Oplevering & Documentatie',
      tijdsduur: '15-30 minuten',
      icon: FileText,
      beschrijving: 'Administratieve afronding en overdracht documenten.',
      details: [
        'Gezamenlijke inspectie installatie',
        'Ondertekening opleveringsformulier',
        'Ontvangst garantiebewijzen en handleidingen',
        'Installatierapport met systeemspecificaties',
        'Instructiekaart voor dagelijks gebruik',
        'Informatie over onderhoudscontract',
        'Kopie van alle relevante certificaten',
        'Betalingsinformatie en factuur'
      ],
      tips: [
        'Bewaar alle documenten goed',
        'Registreer garantie bij fabrikant (vaak online)',
        'Noteer installatiedatum voor onderhoudsschema',
        'Maak foto van installatie voor administratie'
      ]
    },
    {
      nummer: 10,
      titel: 'Nazorg & Service',
      tijdsduur: 'Eerste maand',
      icon: Shield,
      beschrijving: 'Follow-up en beschikbaarheid voor vragen.',
      details: [
        'Telefonische check na 1 week gebruik',
        'Beschikbaarheid voor vragen via telefoon/mail',
        'Eventuele aanpassingen aan instellingen',
        'Reminder voor eerste filterreiniging',
        'Informatie over eerste jaarlijkse onderhoud',
        'Beoordeling op Google/Trustpilot (vrijblijvend)',
        '24/7 storingsdienst beschikbaar'
      ],
      tips: [
        'Bel gerust bij onduidelijkheden',
        'Plan eerste onderhoudsbeurt binnen een jaar',
        'Houd gebruiksaanwijzing bij de hand',
        'Deel uw ervaring met anderen'
      ]
    }
  ];

  const voorbereidingChecklist = [
    {
      fase: 'Week voor installatie',
      items: [
        'Bevestig installatiedatum met StayCool',
        'Ruim installatielocaties op',
        'Informeer buren over werkzaamheden',
        'Regel parkeerplaats voor bedrijfswagen',
        'Check toegang tot meterkast'
      ]
    },
    {
      fase: 'Dag voor installatie',
      items: [
        'Bescherm vloeren met oude lakens of plastic',
        'Verwijder breekbare items uit werkgebied',
        'Zorg voor toegang tot alle ruimtes',
        'Bereid verversingen voor installateurs',
        'Huisdieren tijdelijk elders onderbrengen'
      ]
    },
    {
      fase: 'Op installatiedag',
      items: [
        'Thuis zijn of contactpersoon regelen',
        'Kinderen informeren over werkzaamheden',
        'Stroom niet uitschakelen tijdens installatie',
        'Vragen en onduidelijkheden direct bespreken',
        'Documentatie en garantiebewijzen in ontvangst nemen'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Installatie Stappenplan Limburg | Van Offerte tot Installatie"
        description="Complete gids voor airco installatie in Limburg. Alle stappen van offerte tot werkende airco. Inclusief tijdlijn en tips."
        canonicalUrl="https://staycoolairco.nl/airco-installatie/noindex/stappenplan-limburg"
        noIndex={true}
      />
      <HowToSchema
        name="Airco Installatie Stappenplan Limburg"
        description="Complete gids voor airco installatie in Limburg: van contact tot werkende airco in 10 stappen. Tijdlijn en tips."
        totalTime="PT840H"
        steps={stappen.map(stap => ({
          name: stap.titel,
          text: stap.beschrijving
        }))}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/30 rounded-full text-sm font-medium mb-4">
            Stappenplan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Installatie in Limburg: Het Complete Stappenplan
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Van eerste contact tot perfect werkende airconditioning - wat kunt u verwachten?
          </p>
          <p className="text-lg text-blue-200">
            Totale tijdsduur: 3-5 weken van offerte tot installatie
          </p>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Transparant proces</h3>
                <p className="text-gray-700">
                  Bij StayCool Airco geloven we in transparantie. Deze pagina legt stap voor stap uit wat u kunt verwachten tijdens het hele installatieproces. Van uw eerste telefoontje tot de nazorg na installatie - u weet precies waar u aan toe bent.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">3-5 weken</div>
              <div className="text-gray-600">Van offerte tot installatie</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
              <div className="text-gray-600">Duidelijke stappen</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">Transparantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stappen */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            De 10 stappen naar uw nieuwe airco
          </h2>

          <div className="space-y-8">
            {stappen.map((stap, index) => {
              const Icon = stap.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                          {stap.nummer}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{stap.titel}</h3>
                          <div className="flex items-center text-blue-100 mt-1">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{stap.tijdsduur}</span>
                          </div>
                        </div>
                      </div>
                      <Icon className="h-12 w-12 text-blue-200" />
                    </div>
                    <p className="text-blue-50 text-lg">{stap.beschrijving}</p>
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Wat gebeurt er:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {stap.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {stap.tips && (
                      <>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                          Tips voor u:
                        </h4>
                        <ul className="space-y-2 bg-blue-50 p-4 rounded-lg">
                          {stap.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {stap.verwacht && (
                      <>
                        <h4 className="font-bold text-gray-900 mb-3 mt-4 flex items-center">
                          <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                          Wat te verwachten:
                        </h4>
                        <ul className="space-y-2 bg-amber-50 p-4 rounded-lg">
                          {stap.verwacht.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-amber-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voorbereidingschecklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Voorbereidingschecklist
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Zorg dat u optimaal voorbereid bent voor een vlotte installatie
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {voorbereidingChecklist.map((fase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-bold text-gray-900">{fase.fase}</h3>
                </div>
                <ul className="space-y-3">
                  {fase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn Overzicht */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tijdlijn in een oogopslag
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl font-bold">Week 1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Contact & Advies</h3>
                  <p className="text-gray-700">Eerste contact, locatiebezoek en offerte ontvangen</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl font-bold">Week 2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Akkoord & Bestelling</h3>
                  <p className="text-gray-700">Offerte accorderen, materialen bestellen, planning maken</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-400 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl font-bold">Week 3-4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Levertijd</h3>
                  <p className="text-gray-700">Materialen worden geleverd, laatste voorbereidingen</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-3xl font-bold">Week 5</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Installatie!</h3>
                  <p className="text-gray-700">Installatie, inbedrijfstelling en oplevering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Flexibele planning</h3>
                <p className="text-gray-700">
                  Deze tijdlijn is indicatief. De exacte doorlooptijd hangt af van de beschikbaarheid van materialen en uw gewenste installatiedatum. In drukke periodes (voorjaar/zomer) kan de levertijd iets langer zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgestelde Vragen */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde vragen over het installatieproces
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Hoe lang duurt de installatie zelf?</h3>
              <p className="text-gray-700">
                Voor een enkelvoudige airco (1 binnen- en 1 buitenunit) rekenen we op 4-6 uur. Voor een multisplit met meerdere binnenunits is dit 6-8 uur, afhankelijk van de complexiteit van de installatie.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Moet ik de hele dag thuis zijn?</h3>
              <p className="text-gray-700">
                Ja, het is belangrijk dat u of een contactpersoon de hele dag aanwezig is. De installateurs moeten binnen en buiten werken en hebben mogelijk vragen tijdens het installatieproces.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Maken jullie veel rommel tijdens de installatie?</h3>
              <p className="text-gray-700">
                We werken altijd netjes en beschermen vloeren en meubels. Bij kernboringen ontstaat wat stof, maar dit vangen we zoveel mogelijk af met speciale opvangzakken. Na afloop ruimen we alles op en nemen al het afval mee.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Kan ik direct na installatie de airco gebruiken?</h3>
              <p className="text-gray-700">
                Ja! Na de inbedrijfstelling en instructie is uw airco direct klaar voor gebruik. U kunt meteen beginnen met koelen of verwarmen, afhankelijk van uw behoefte.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Wat als ik na installatie nog vragen heb?</h3>
              <p className="text-gray-700">
                U kunt ons altijd bellen of mailen met vragen. We bellen u ook proactief na een week om te vragen hoe het systeem bevalt. Daarnaast heeft u toegang tot onze 24/7 storingsdienst.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Hebben jullie toestemming nodig van de VVE?</h3>
              <p className="text-gray-700">
                Bij appartementen is vaak VVE-toestemming vereist voor het plaatsen van een buitenunit. We adviseren u hierover tijdens het adviesgesprek en kunnen helpen met het aanvragen van de benodigde toestemming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar pillar page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer over airco installatie</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/kennisbank/airco-installatie-limburg" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-600 mb-2">→ Airco Installatie Limburg</h3>
              <p className="text-gray-600">Complete informatie over airco installatie in Limburg door StayCool</p>
            </Link>
            <Link to="/contact" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
              <h3 className="font-bold text-green-600 mb-2">→ Vraag een offerte aan</h3>
              <p className="text-gray-600">Vrijblijvend advies en offerte voor uw situatie</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar voor stap 1?</h2>
          <p className="text-xl mb-8">Neem contact op voor een vrijblijvend adviesgesprek en persoonlijke offerte</p>
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
              Online offerte aanvragen
            </Link>
          </div>
          <p className="mt-6 text-blue-200">
            Gemiddelde responstijd: binnen 24 uur
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoInstallatieLimburgStappenplanPage;

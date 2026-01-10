import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, HelpCircle, Phone, CheckCircle, ArrowRight, Home, Zap, Users, Euro, Calendar } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import FAQSchema from '../../../../components/SEO/FAQSchema';

const ThuisbatterijHulpKiezen = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{
    household?: string;
    usage?: string;
    solar?: string;
    future?: string;
    budget?: string;
  }>({});

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Keuzehulp' }
  ];

  const getRecommendation = () => {
    let capacity = 5;
    let price = "€6.500 - €8.500";
    let brands = ["Huawei Luna 2000"];
    let features = [];

    // Berekening op basis van antwoorden
    if (answers.household === '4+') {
      capacity = 10;
      price = "€10.500 - €12.500";
      brands = ["Tesla Powerwall 3", "Huawei Luna 2000"];
    }

    if (answers.usage === 'high') {
      capacity = Math.max(capacity, 12);
      price = "€12.500 - €15.500";
      brands = ["Tesla Powerwall 3", "BYD Battery-Box Premium"];
      features.push("Extra hoge capaciteit voor groot verbruik");
    }

    if (answers.solar === 'yes') {
      features.push("Perfect te combineren met bestaande zonnepanelen");
    } else {
      features.push("Inclusief zonnepanelen aanbevolen voor maximale besparing");
    }

    if (answers.future === 'ev') {
      capacity = Math.max(capacity, 12);
      features.push("Geschikt voor opladen elektrische auto");
      brands = ["Tesla Powerwall 3", "BYD Battery-Box HVS"];
    } else if (answers.future === 'heatpump') {
      capacity = Math.max(capacity, 10);
      features.push("Ideaal voor warmtepomp combinatie");
    }

    if (answers.budget === 'premium') {
      brands = ["Tesla Powerwall 3"];
      features.push("Premium kwaliteit met beste software");
    } else if (answers.budget === 'value') {
      brands = ["Huawei Luna 2000", "BYD Battery-Box"];
      features.push("Beste prijs-kwaliteit verhouding");
    }

    return {
      capacity,
      price,
      brands: [...new Set(brands)],
      features: [...new Set(features)],
      savings: capacity * 50
    };
  };

  const faqItems = [
    {
      question: "Hoe weet ik welke capaciteit ik nodig heb?",
      answer: "Dit hangt af van uw dagelijks energieverbruik. Een gemiddeld gezin van 4 personen verbruikt 10-15 kWh per dag. Voor basis zelfvoorziening adviseren wij 8-10 kWh, voor hoge zelfvoorziening 12-15 kWh. Heeft u een warmtepomp of elektrische auto? Dan is meer capaciteit aan te raden. Onze experts berekenen tijdens het adviesgesprek uw ideale capaciteit."
    },
    {
      question: "Is het beter om een grotere batterij te kopen voor de toekomst?",
      answer: "Dit hangt af van uw budget en plannen. Voordelen grotere batterij: meer toekomstbestendig, betere prijs per kWh, ruimte voor groeiend verbruik. Nadeel: hogere investering. Bij merken zoals BYD en Huawei kunt u later uitbreiden met modules, wat flexibeler is. Wij adviseren: start met wat u nu nodig heeft, kies uitbreidbaar systeem."
    },
    {
      question: "Welk merk thuisbatterij is het beste voor mijn situatie?",
      answer: "Dit hangt af van uw prioriteiten. Tesla Powerwall: beste software, mooiste design, hoogste prijs. Huawei Luna: uitstekende prijs-kwaliteit, betrouwbaar. BYD Battery-Box: modulair uitbreidbaar, lange levensduur. SolarEdge: perfect bij bestaande SolarEdge omvormer. Wij adviseren altijd het beste merk voor uw specifieke wensen en budget."
    },
    {
      question: "Kan ik een thuisbatterij combineren met mijn bestaande zonnepanelen?",
      answer: "Ja, in bijna alle gevallen is dit mogelijk! We controleren eerst uw huidige systeem: panelen, omvormer, en configuratie. Afhankelijk hiervan kiezen we een AC-gekoppelde of DC-gekoppelde batterij. Bij oudere omvormers kan een upgrade nodig zijn. Dit alles bespreken we tijdens het gratis adviesgesprek met een duidelijke offerte."
    },
    {
      question: "Wat is het verschil tussen AC en DC gekoppelde batterijen?",
      answer: "DC-gekoppeld: batterij wordt voor de omvormer aangesloten, efficiënter (2-5% minder verlies), ideaal voor nieuwe installaties. AC-gekoppeld: batterij wordt na de omvormer aangesloten, flexibeler voor bestaande systemen, eenvoudiger na te plaatsen. Voor nieuwe systemen raden we DC aan, voor bestaande installaties vaak AC."
    },
    {
      question: "Hoeveel kan ik besparen met een thuisbatterij?",
      answer: "Dit hangt af van capaciteit, verbruik en stroomtarief. Gemiddeld bespaart een huishouden €500-€800 per jaar. Bij dynamische contracten kan dit oplopen tot €1.000-€1.200 per jaar. De terugverdientijd is 9-12 jaar, sneller bij stijgende energieprijzen. Met zonnepanelen combineert u maximaliseert u de besparing."
    },
    {
      question: "Hoe lang duurt de installatie van een thuisbatterij?",
      answer: "De fysieke installatie duurt 4-8 uur voor de batterij en aansluiting. Daarna nog 1-2 uur voor configuratie en testen. In totaal bent u één werkdag kwijt. Bij complexere situaties (nieuwe omvormer, uitgebreide aanpassingen) kan dit 1,5-2 dagen duren. Onze monteurs werken netjes, ruimen alles op en instrueren u volledig."
    },
    {
      question: "Krijg ik subsidie voor een thuisbatterij?",
      answer: "Directe subsidie is er momenteel (2025) niet landelijk. Wel profiteert u van 0% BTW bij gecombineerde installatie met zonnepanelen. Sommige gemeenten en provincies bieden lokale regelingen of leningen met lage rente. Check onze actuele subsidie-pagina of vraag tijdens het adviesgesprek naar mogelijkheden in uw regio."
    },
    {
      question: "Is een thuisbatterij veilig in mijn huis?",
      answer: "Ja, zeer veilig! Moderne batterijen hebben meerdere beschermingen: temperatuurbeveiliging, overlaadbeveiliging, branddetectie, en automatische uitschakeling. LiFePO4 batterijen zijn extra veilig en stabiel. Installatie volgens NEN-normen met brandwerende behuizing. Onze monteurs plaatsen volgens strenge veiligheidseisen met proper ventilatie."
    },
    {
      question: "Wat voor garantie krijg ik op een thuisbatterij?",
      answer: "Standaard krijgt u 10 jaar fabrieksgarantie op de batterij met gegarandeerde capaciteit (70-80% na 10 jaar). Omvormers hebben 5-10 jaar garantie. StayCool biedt daarnaast 2 jaar volledige installatiegarantie en levenslange ondersteuning. Bij problemen zijn we er binnen 48 uur. Optioneel bieden we onderhoudscontracten vanaf €99/jaar."
    },
    {
      question: "Werkt mijn batterij ook bij een stroomstoring?",
      answer: "Dit hangt af van het type batterij. Batterijen met backup-functie (zoals Tesla Powerwall 3) leveren automatisch stroom bij stroomuitval en houden essentiële apparaten werkend. Standaard batterijen schakelen uit voor veiligheid van monteurs op het net. Voor noodstroom-functionaliteit moet u dit expliciet meenemen in uw keuze."
    },
    {
      question: "Kan ik mijn elektrische auto opladen met een thuisbatterij?",
      answer: "Ja, maar met beperkingen. Een 10 kWh batterij geeft ongeveer 50-60 km rijbereik. Voor volledig laden is dit onpraktisch. Slim gebruik: batterij laadt overdag met zon, 's avonds laadt u uw auto bij met batterij-energie plus goedkope nachtstroom. Voor frequente EV-lading adviseren wij minimaal 12-15 kWh batterij."
    },
    {
      question: "Moet ik mijn energieleverancier informeren over een thuisbatterij?",
      answer: "U moet uw netbeheerder informeren (wettelijke meldingsplicht) - dit regelen wij voor u. Uw energieleverancier informeren is niet verplicht maar wel verstandig, vooral bij dynamische contracten waar u optimaal profiteert. Sommige leveranciers bieden speciale tarieven voor batterijbezitters. Wij adviseren hierover tijdens het gesprek."
    },
    {
      question: "Hoeveel onderhoud heeft een thuisbatterij nodig?",
      answer: "Zeer weinig! Thuisbatterijen zijn vrijwel onderhoudsvrij. Wij adviseren jaarlijkse inspectie: controle verbindingen, software updates, prestatie-analyse. Dit duurt 30-60 minuten. Via online monitoring kunnen we op afstand veel controleren. Optionele onderhoudscontracten vanaf €99/jaar inclusief jaarlijkse inspectie, voorrang bij storingen en updates."
    },
    {
      question: "Wat zijn de grootste fouten bij aanschaf van een thuisbatterij?",
      answer: "Veel gemaakte fouten: 1) Te kleine capaciteit kiezen uit kostenoverweging (u krijgt niet volledige besparing), 2) Alleen op prijs letten (kwaliteit en garantie zijn ook belangrijk), 3) Geen professionele installatie (veiligheid en prestaties lijden), 4) Toekomst niet meenemen (later uitbreiden is duurder). Wij helpen deze valkuilen te vermijden!"
    }
  ];

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const renderQuestion = (questionData: any, questionNumber: number) => {
    const questions = [
      {
        title: "Hoeveel personen wonen er in uw huishouden?",
        icon: <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
        options: [
          { value: '1-2', label: '1-2 personen', description: 'Klein huishouden' },
          { value: '3-4', label: '3-4 personen', description: 'Gemiddeld gezin' },
          { value: '4+', label: '4+ personen', description: 'Groot huishouden' }
        ]
      },
      {
        title: "Hoe hoog is uw energieverbruik?",
        icon: <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
        options: [
          { value: 'low', label: 'Laag (< 3.000 kWh/jaar)', description: 'Zuinig verbruik' },
          { value: 'medium', label: 'Gemiddeld (3.000-4.500 kWh/jaar)', description: 'Normaal verbruik' },
          { value: 'high', label: 'Hoog (> 4.500 kWh/jaar)', description: 'Veel apparaten' }
        ]
      },
      {
        title: "Heeft u al zonnepanelen?",
        icon: <Battery className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
        options: [
          { value: 'yes', label: 'Ja, ik heb zonnepanelen', description: 'Bestaande installatie' },
          { value: 'no', label: 'Nee, nog niet', description: 'Wil ook zonnepanelen' },
          { value: 'planning', label: 'Binnenkort', description: 'In de planning' }
        ]
      },
      {
        title: "Wat zijn uw toekomstplannen?",
        icon: <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
        options: [
          { value: 'none', label: 'Geen speciale plannen', description: 'Huidige situatie optimaliseren' },
          { value: 'ev', label: 'Elektrische auto', description: 'Binnenkort EV aanschaffen' },
          { value: 'heatpump', label: 'Warmtepomp', description: 'Warmtepomp installeren' }
        ]
      },
      {
        title: "Wat is uw budget voor een thuisbatterij?",
        icon: <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
        options: [
          { value: 'basic', label: 'Budget (€ 6.000 - €9.000)', description: 'Basismodel' },
          { value: 'value', label: 'Standaard (€ 9.000 - €12.000)', description: 'Beste prijs-kwaliteit' },
          { value: 'premium', label: 'Premium (€ 12.000+)', description: 'Hoogste kwaliteit' }
        ]
      }
    ];

    const currentQuestion = questions[questionNumber - 1];

    return (
      <div className="max-w-2xl mx-auto">
        {currentQuestion.icon}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {currentQuestion.title}
        </h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                const key = ['household', 'usage', 'solar', 'future', 'budget'][questionNumber - 1];
                setAnswers({ ...answers, [key]: option.value });
                if (questionNumber < 5) {
                  setStep(questionNumber + 1);
                } else {
                  setStep(6);
                }
              }}
              className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-gray-200 hover:border-blue-500 text-left group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600">
                    {option.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {option.description}
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
        {questionNumber > 1 && (
          <button
            onClick={() => setStep(questionNumber - 1)}
            className="mt-6 text-blue-600 hover:underline"
          >
            ← Vorige vraag
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Keuzehulp - Vind de Perfecte Batterij | StayCool Airco"
        description="Keuzehulp voor thuisbatterijen. Beantwoord 5 vragen en ontdek welke capaciteit, merk en prijs bij u past. Gratis advies."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-hulp-kiezen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <FAQSchema faqs={faqItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Welke Thuisbatterij Past bij U?
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Beantwoord 5 vragen en ontdek direct welke capaciteit, merken en prijsklasse
            het beste bij uw situatie passen. Inclusief persoonlijk advies.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {step <= 5 && (
        <section className="py-6 bg-white border-b">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Vraag {step} van 5
              </span>
              <span className="text-sm text-gray-600">
                {Math.round((step / 5) * 100)}% voltooid
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Questions */}
      {step <= 5 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            {renderQuestion({}, step)}
          </div>
        </section>
      )}

      {/* Results */}
      {step === 6 && (() => {
        const recommendation = getRecommendation();
        return (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Uw Persoonlijke Advies
                </h2>
                <p className="text-lg text-gray-600">
                  Op basis van uw antwoorden adviseren wij het volgende systeem:
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Aanbevolen Capaciteit</h3>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        {recommendation.capacity} kWh
                      </div>
                      <p className="text-gray-700">
                        Perfect voor uw huishouden en energieverbruik
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Investering</h3>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {recommendation.price}
                      </div>
                      <p className="text-gray-700">
                        Inclusief installatie en configuratie
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Geschikte Merken</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex flex-wrap gap-3 mb-4">
                      {recommendation.brands.map((brand, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Deze merken voldoen aan uw eisen en budget
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Belangrijke Kenmerken</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <ul className="space-y-3">
                      {recommendation.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Verwachte besparing: €{recommendation.savings} - €{Math.round(recommendation.savings * 1.4)} per jaar
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-yellow-600" />
                  Let op: Dit is een indicatief advies
                </h3>
                <p className="text-gray-700">
                  Voor een definitief advies op maat adviseren wij een gratis adviesgesprek bij u thuis.
                  Onze experts bekijken uw specifieke situatie en maken een gedetailleerde berekening.
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    setStep(1);
                    setAnswers({});
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Opnieuw beginnen
                </button>
                <a
                  href="tel:046-202-1430"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Bel voor persoonlijk advies
                </a>
              </div>
            </div>
          </section>
        );
      })()}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen over Kiezen
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <ArrowRight
                    className={`h-5 w-5 text-blue-600 transition-transform ${
                      expandedFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links naar indexed pages */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer Informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/thuisbatterijen"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-600"
            >
              <Battery className="h-6 w-6 text-blue-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Thuisbatterijen</span>
              <span className="text-sm text-gray-600">Complete informatie</span>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-green-600"
            >
              <Euro className="h-6 w-6 text-green-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Kosten</span>
              <span className="text-sm text-gray-600">Prijzen & besparingen</span>
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-600"
            >
              <Phone className="h-6 w-6 text-purple-600 mb-2" />
              <span className="font-semibold text-gray-900 block mb-1">Contact</span>
              <span className="text-sm text-gray-600">Persoonlijk advies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Wilt u Persoonlijk Advies?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Onze experts berekenen gratis en vrijblijvend uw ideale thuisbatterij configuratie.
          </p>
          <a
            href="tel:046-202-1430"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="h-5 w-5 mr-2" />
            046 - 202 1430
          </a>
          <p className="mt-6 text-purple-100">
            <CheckCircle className="h-5 w-5 inline mr-2" />
            Binnen 1 week bij u voor adviesgesprek • Geen verplichtingen
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijHulpKiezen;

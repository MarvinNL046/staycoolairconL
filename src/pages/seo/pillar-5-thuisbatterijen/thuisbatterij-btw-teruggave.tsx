import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, CheckCircle, Shield, FileText, Calculator, Phone, TrendingUp, AlertCircle, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijBtwTeruggavePage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'BTW Teruggave' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW Tarief",
      description: "Sinds 1 januari 2023 betaalt u 0% BTW op thuisbatterijen met zonnepanelen"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "21% Besparing",
      description: "Direct €2.100 korting op een investering van €10.000 door BTW-vrijstelling"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Eenvoudige Aanvraag",
      description: "Wij regelen alle administratie en BTW-teruggave voor u"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Belastingdienst Erkend",
      description: "AlphaESS thuisbatterijen voldoen aan alle BTW-vrijstellingseisen"
    }
  ];

  const requirements = [
    {
      title: "Installatie Samen met Zonnepanelen",
      description: "De thuisbatterij moet worden geïnstalleerd in combinatie met zonnepanelen op hetzelfde adres.",
      details: "Dit kan tegelijk gebeuren of de batterij kan later worden toegevoegd aan een bestaand zonnepanelensysteem. Belangrijk: de factuur moet vermelden dat het gaat om een gecombineerd systeem."
    },
    {
      title: "Particuliere Woning",
      description: "Het 0% BTW-tarief geldt alleen voor particuliere woningen, niet voor zakelijk gebruik.",
      details: "De woning moet uw hoofdverblijf zijn. Bij gemengd gebruik (bijvoorbeeld praktijkruimte aan huis) kan gedeeltelijke BTW-vrijstelling van toepassing zijn."
    },
    {
      title: "Erkende Installateur",
      description: "De installatie moet worden uitgevoerd door een erkende, geregistreerde installateur.",
      details: "StayCool Airco is volledig gecertificeerd en erkend voor BTW-vrijgestelde thuisbatterij-installaties. Wij zorgen voor correcte facturering en documentatie."
    },
    {
      title: "Correcte Facturering",
      description: "De factuur moet specifiek vermelden dat het 0% BTW-tarief van toepassing is.",
      details: "Wij zorgen voor BTW-correcte facturen met juiste omschrijvingen, BTW-codes en vermelding van de wettelijke grondslag (Tabel II, letter a, onderdeel 30 Wet OB)."
    }
  ];

  const savingsExamples = [
    {
      system: "SMILE-B3 (2,9 kWh)",
      priceWithVat: "€5.500",
      priceWithoutVat: "€4.545",
      savings: "€955",
      description: "Meest betaalbare optie met maximale BTW-besparing"
    },
    {
      system: "SMILE5 (5 kWh basis)",
      priceWithVat: "€7.000",
      priceWithoutVat: "€5.785",
      savings: "€1.215",
      description: "Modulair systeem met toekomstbestendigheid"
    },
    {
      system: "SMILE5 (10 kWh uitgebreid)",
      priceWithVat: "€9.000",
      priceWithoutVat: "€7.438",
      savings: "€1.562",
      description: "Uitgebreide configuratie voor grote huishoudens"
    },
    {
      system: "SMILE-T10 (10 kWh 3-fase)",
      priceWithVat: "€13.000",
      priceWithoutVat: "€10.744",
      savings: "€2.256",
      description: "Zakelijk/particulier high-end systeem"
    }
  ];

  const faqs = [
    {
      question: "Moet ik de BTW zelf terugvragen bij de Belastingdienst?",
      answer: "Nee! Bij het 0% BTW-tarief betaalt u vanaf 1 januari 2023 helemaal geen BTW meer. U hoeft niets terug te vragen - de installateur factureert direct zonder BTW. Dit scheelt u administratieve rompslomp en u profiteert meteen van de lagere prijs."
    },
    {
      question: "Kan ik ook BTW terugvragen als ik al zonnepanelen heb?",
      answer: "Ja, absoluut! U kunt het 0% BTW-tarief ook gebruiken als u later een batterij toevoegt aan een bestaand zonnepanelensysteem. De enige voorwaarde is dat op de factuur wordt vermeld dat de batterij deel uitmaakt van het gecombineerde systeem met zonnepanelen."
    },
    {
      question: "Geldt de BTW-vrijstelling ook voor installatie en montage?",
      answer: "Ja, de volledige installatie inclusief materiaal, montage, configuratie en inbedrijfstelling valt onder het 0% BTW-tarief. Dit betekent dat alle kosten gerelateerd aan de thuisbatterij BTW-vrij zijn."
    },
    {
      question: "Wat als ik een thuisbatterij koop voor mijn bedrijfspand?",
      answer: "Voor zakelijk gebruik geldt het normale 21% BTW-tarief. Echter, als ondernemer kunt u deze BTW wel volledig terugvorderen via uw BTW-aangifte. Daarnaast kunt u profiteren van investeringsaftrek (EIA/MIA) en afschrijving, waardoor de netto investering vaak voordeliger uitvalt dan bij particulier gebruik."
    },
    {
      question: "Moet mijn huis aan bepaalde eisen voldoen?",
      answer: "De woning moet een particuliere woning zijn waar u permanent woont. Er zijn geen specifieke eisen aan de leeftijd, grootte of energielabel van de woning. Ook bij huurwoningen kunt u profiteren van het 0% BTW-tarief (met toestemming van de verhuurder)."
    },
    {
      question: "Wat gebeurt er als ik verhuizen naar een nieuwe woning?",
      answer: "Als u verhuist binnen 10 jaar na aanschaf, moet u dit melden aan de Belastingdienst als u het batterijsysteem meeneemt. Meestal blijft het systeem achter in de woning (verhoogt verkoopwaarde). Bij achterlaten is er geen actie nodig. Bij meenemen naar nieuwe woning moet u mogelijk een deel van de BTW-voordeel corrigeren."
    },
    {
      question: "Hoe zit het met tweedehands batterijen?",
      answer: "Het 0% BTW-tarief geldt alleen voor nieuwe thuisbatterijen die professioneel worden geïnstalleerd door een erkende installateur. Voor tweedehands batterijen geldt het normale BTW-tarief. Let op: bij tweedehands batterijen heeft u ook geen fabrieksgarantie meer."
    },
    {
      question: "Welke documenten heb ik nodig voor de BTW-vrijstelling?",
      answer: "Wij zorgen voor alle benodigde documentatie: BTW-correcte factuur met vermelding 0% tarief en wettelijke grondslag, installatiecertificaat, en bevestiging dat het om een particuliere installatie gaat. U hoeft zelf geen aanvraag in te dienen bij de Belastingdienst."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Offerte Aanvragen",
      description: "Vraag een gratis offerte aan voor uw AlphaESS thuisbatterij inclusief installatie. Wij berekenen direct de prijs met 0% BTW.",
      action: "Vraag offerte aan"
    },
    {
      number: 2,
      title: "Bespreking & Configuratie",
      description: "Tijdens ons adviesgesprek bepalen we de optimale configuratie voor uw situatie. Wij leggen de BTW-vrijstelling en alle voorwaarden uit.",
      action: "Plan adviesgesprek"
    },
    {
      number: 3,
      title: "Offerte Accepteren",
      description: "U ontvangt een gedetailleerde offerte met 0% BTW. Na acceptatie plannen we de installatie op een moment dat u uitkomt.",
      action: "Offerte accepteren"
    },
    {
      number: 4,
      title: "Professionele Installatie",
      description: "Onze gecertificeerde installateurs plaatsen uw batterij volgens alle regels. De installatie duurt 4-6 uur inclusief configuratie.",
      action: "Installatie ontvangen"
    },
    {
      number: 5,
      title: "BTW-Correcte Factuur",
      description: "Na installatie ontvangt u een BTW-correcte factuur met 0% tarief en alle benodigde documentatie. Geen verdere actie nodig.",
      action: "Factuur ontvangen"
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij BTW Teruggave Limburg | 0% BTW Tarief 2024 | StayCool Airco"
        description="Thuisbatterij BTW teruggave ✓ 0% BTW tarief sinds 2023 ✓ 21% besparing ✓ Alle voorwaarden uitgelegd ✓ Wij regelen de administratie ✓ Gratis advies!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij BTW Teruggave: Complete Gids 0% BTW Tarief",
          description: "Alles over de BTW-vrijstelling voor thuisbatterijen sinds 1 januari 2023. Voorwaarden, procedure en besparingen uitgelegd.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij BTW Teruggave: Profiteer van 0% BTW Tarief
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Sinds 1 januari 2023 betaalt u 0% BTW op thuisbatterijen gecombineerd met zonnepanelen. Dit levert direct 21% besparing op - tot wel €2.000+ korting op uw investering!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Offerte met 0% BTW
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Besparing
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Let op: Voorwaarden van toepassing</p>
                <p className="text-sm">
                  Het 0% BTW-tarief geldt alleen voor particuliere woningen in combinatie met zonnepanelen. Lees verder voor alle details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voordelen 0% BTW Tarief Thuisbatterijen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct profiteren van BTW-vrijstelling zonder administratieve rompslomp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat is de BTW-Vrijstelling voor Thuisbatterijen?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Sinds <strong>1 januari 2023</strong> geldt in Nederland een <strong>0% BTW-tarief</strong> voor de levering en installatie van thuisbatterijen (energieopslagsystemen) in combinatie met zonnepanelen op particuliere woningen. Dit betekent dat u geen BTW meer betaalt over de aanschaf en installatie van een thuisbatterij - wat direct <strong>21% korting</strong> oplevert.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Deze maatregel is ingevoerd om de verduurzaming van woningen te stimuleren en energieopslag toegankelijker te maken. Voor een thuisbatterij van €10.000 bespaart u hiermee direct <strong>€2.100</strong>. Dit maakt de investering aanzienlijk aantrekkelijker en verkort de terugverdientijd met 1-2 jaar.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Belangrijk om te Weten:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>U hoeft <strong>niets terug te vragen</strong> - de installateur factureert direct met 0% BTW</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>De regeling geldt ook als u <strong>later een batterij toevoegt</strong> aan bestaande zonnepanelen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Zowel de <strong>batterij als installatie</strong> vallen onder het 0% tarief</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Alle <strong>AlphaESS modellen</strong> (SMILE-B3, SMILE5, SMILE-T10) komen in aanmerking</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Voorwaarden voor 0% BTW Tarief
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Om in aanmerking te komen voor het 0% BTW-tarief moet uw situatie aan de volgende voorwaarden voldoen:
            </p>

            <div className="space-y-6 mb-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mr-3" />
                    {req.title}
                  </h3>
                  <p className="text-gray-700 mb-3 ml-9">{req.description}</p>
                  <div className="ml-9 bg-gray-50 rounded p-4">
                    <p className="text-sm text-gray-600">{req.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Hoeveel Bespaart U Met 0% BTW?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De BTW-besparing is aanzienlijk en maakt thuisbatterijen veel toegankelijker. Bekijk hieronder de concrete besparingen per AlphaESS model:
            </p>

            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-yellow-500 text-gray-900">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Systeem</th>
                      <th className="px-6 py-4 text-left font-bold">Prijs met 21% BTW</th>
                      <th className="px-6 py-4 text-left font-bold">Prijs met 0% BTW</th>
                      <th className="px-6 py-4 text-left font-bold">Uw Besparing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savingsExamples.map((example, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-900">{example.system}</div>
                          <div className="text-sm text-gray-600">{example.description}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 line-through">{example.priceWithVat}</td>
                        <td className="px-6 py-4 font-bold text-green-600">{example.priceWithoutVat}</td>
                        <td className="px-6 py-4 font-bold text-yellow-600">{example.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rekenvoorbeeld Impact op Terugverdientijd:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>SMILE5 (10 kWh) zonder BTW-vrijstelling:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Investering: €9.000 (incl. 21% BTW)</li>
                  <li>Jaarlijkse besparing: €750</li>
                  <li>Terugverdientijd: 12 jaar</li>
                </ul>
                <p><strong>SMILE5 (10 kWh) met BTW-vrijstelling:</strong></p>
                <ul className="list-disc pl-6">
                  <li>Investering: €7.438 (0% BTW)</li>
                  <li>Jaarlijkse besparing: €750</li>
                  <li>Terugverdientijd: <strong>10 jaar</strong> ✓</li>
                </ul>
                <p className="font-bold mt-4 text-green-700">
                  Resultaat: 2 jaar sneller terugverdiend dankzij BTW-vrijstelling!
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Hoe Werkt de Procedure?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Het mooie van het 0% BTW-tarief is dat het proces <strong>volledig automatisch</strong> verloopt. U hoeft geen aanvraag in te dienen of formulieren in te vullen. Wij regelen alles voor u:
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-md">
                  <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <span className="text-sm text-yellow-600 font-semibold">→ {step.action}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Zakelijk Gebruik: Andere Regels
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Voor <strong>zakelijk gebruik</strong> (kantoren, bedrijfspanden, zzp-werkruimtes) geldt het 0% BTW-tarief <strong>niet</strong>. U betaalt het normale 21% BTW-tarief. Echter, als ondernemer kunt u deze BTW volledig terugvorderen via uw BTW-aangifte.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fiscale Voordelen Zakelijk Gebruik:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>BTW terugvordering:</strong> Volledige 21% BTW terugvragen via BTW-aangifte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Afschrijving:</strong> Investering afschrijven over 5-10 jaar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Investeringsaftrek:</strong> EIA (Energie Investeringsaftrek) tot 45,5% korting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>ISDE subsidie:</strong> Mogelijk extra subsidie voor duurzame energie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Operationele lease:</strong> Maandelijkse kosten direct aftrekbaar</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Netto voordeel:</strong> Door combinatie van BTW-terugvordering, afschrijving en subsidies kan zakelijk gebruik fiscaal voordeliger uitpakken dan particulier gebruik!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profiteer Nu van 0% BTW op Uw Thuisbatterij
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag een gratis offerte aan en ontvang direct de prijs met 0% BTW. Wij regelen alle administratie voor u.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Offerte 0% BTW
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over BTW Teruggave
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bekijk Ook Onze AlphaESS Modellen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-B3</h3>
              <p className="text-gray-600 mb-4">
                Bespaar €955 met 0% BTW op de meest compacte AlphaESS batterij.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Meer over SMILE-B3 →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE5</h3>
              <p className="text-gray-600 mb-4">
                Bespaar €1.215-1.562 met 0% BTW op modulair uitbreidbaar systeem.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Meer over SMILE5 →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-T10</h3>
              <p className="text-gray-600 mb-4">
                Bespaar €2.256 met 0% BTW op 10 kWh 3-fase premium systeem.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Meer over SMILE-T10 →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Vandaag en Bespaar Direct 21%
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Wij zorgen voor BTW-correcte offertes, professionele installatie en alle documentatie. Profiteer van de laagste prijzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw Voordeel
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <TrendingUp className="h-6 w-6 mr-2" />
              Terugverdientijd Berekenen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijBtwTeruggavePage;

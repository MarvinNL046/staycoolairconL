import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function StoringscodeGids() {
  return (
    <ArticleLayout
      title="Airco Storingscodes Gids: Snel Problemen Oplossen | StayCool"
      description="Leer airco storingscodes begrijpen en los problemen zelf op. Complete gids voor LG, Toshiba en Mitsubishi airconditioners met troubleshooting tips."
      publishDate="2024-01-23"
      modifiedDate="2024-01-23"
      author="StayCool Airconditioning"
      tags={['Onderhoud', 'Storingen', 'DIY', 'Handleiding']}
    >
      <section className="prose prose-lg max-w-none">
        <h2>Wat zijn Airco Storingscodes?</h2>
        <p>
          Moderne airconditioners zijn uitgerust met een diagnostisch systeem dat problemen kan detecteren en weergeven via storingscodes. 
          Deze codes helpen bij het identificeren van specifieke problemen, wat de troubleshooting en reparatie efficiënter maakt.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
            <p className="text-blue-700">
              Storingscodes verschillen per merk en model. Het is belangrijk om altijd de handleiding van uw specifieke model te raadplegen.
            </p>
          </div>
        </div>

        <h2>Veelvoorkomende Storingscodes en Hun Betekenis</h2>
        
        <h3>LG Airconditioner Storingscodes</h3>
        <ul>
          <li><strong>CH 01/02</strong>: Probleem met de binnenunit sensor</li>
          <li><strong>CH 03</strong>: Communicatiefout tussen binnen- en buitenunit</li>
          <li><strong>CH 05</strong>: Communicatiefout PCB</li>
          <li><strong>CH 10</strong>: Ventilator binnenunit werkt niet correct</li>
          <li><strong>CH 21</strong>: Hoogspanningsfout</li>
        </ul>

        <h3>Toshiba Airconditioner Storingscodes</h3>
        <ul>
          <li><strong>F01</strong>: Temperatuursensor binnenunit defect</li>
          <li><strong>F02</strong>: Probleem met warmtewisselaar sensor</li>
          <li><strong>F04-F06</strong>: Sensorfout buitenunit</li>
          <li><strong>F08</strong>: Temperatuursensor aanvoerlucht defect</li>
          <li><strong>F10</strong>: Ventilatormotor binnenunit probleem</li>
        </ul>

        <h3>Mitsubishi Heavy Storingscodes</h3>
        <ul>
          <li><strong>E1</strong>: Temperatuursensor fout</li>
          <li><strong>E2</strong>: Communicatiefout binnen/buitenunit</li>
          <li><strong>E5</strong>: Probleem met buitenunit ventilatormotor</li>
          <li><strong>E6</strong>: Compressor overbelasting</li>
          <li><strong>E9</strong>: Drainage systeem probleem</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <p className="text-yellow-700 font-medium">Let op:</p>
              <p className="text-yellow-600">
                Bij herhaaldelijke storingscodes of wanneer de voorgestelde oplossingen niet werken, 
                is het verstandig om contact op te nemen met een gecertificeerde airco monteur.
              </p>
            </div>
          </div>
        </div>

        <h2>Eenvoudige Probleemoplossing</h2>
        <p>
          Voordat u een monteur belt, kunt u deze stappen proberen:
        </p>
        <ol>
          <li>Reset de airco door de stroom voor 3 minuten uit te schakelen</li>
          <li>Controleer of de filters schoon zijn</li>
          <li>Kijk of de binnen- en buitenunit niet geblokkeerd zijn</li>
          <li>Verifieer of alle deuren en ramen gesloten zijn tijdens gebruik</li>
          <li>Controleer of de batterijen van de afstandsbediening nog goed zijn</li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <p className="text-green-700 font-medium">Preventief onderhoud:</p>
              <p className="text-green-600">
                Regelmatig onderhoud kan veel storingen voorkomen. We raden aan om uw airco jaarlijks te laten controleren 
                en onderhouden door een professional.
              </p>
            </div>
          </div>
        </div>

        <h2>Wanneer Contact Opnemen met een Professional?</h2>
        <p>
          Neem direct contact op met een gecertificeerde monteur bij:
        </p>
        <ul>
          <li>Aanhoudende storingscodes na reset</li>
          <li>Vreemde geluiden of geuren</li>
          <li>Waterlekkage</li>
          <li>Verminderde koeling of verwarming</li>
          <li>Elektrische problemen</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8 shadow-sm">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Heeft u vragen over dit onderwerp?</h3>
          <p className="text-blue-700 mb-4">
            Onze airco-experts staan klaar om u te helpen met persoonlijk advies voor uw situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Vraag vrijblijvend advies
            </a>
            <a
              href="tel:0462021430"
              className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md text-base font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}

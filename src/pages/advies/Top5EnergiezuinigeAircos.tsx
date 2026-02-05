import React from 'react';
import TopListTemplate from '../../components/templates/TopListTemplate';
import { aircoProducts } from '../../data/aircoProducts';

export default function Top5EnergiezuinigeAircos() {
    // Logic: Sort by SEER (Cooling efficiency) descending
    const products = aircoProducts
        .filter(p => {
            if (!p.image || p.id.startsWith('mock')) return false;
            return !!p.seer;
        })
        .sort((a, b) => {
            const seerA = parseFloat(a.seer?.replace(',', '.') || "0");
            const seerB = parseFloat(b.seer?.replace(',', '.') || "0");
            return seerB - seerA; // Highest SEER first
        })
        .slice(0, 5);

    const intro = (
        <>
            <p className="lead text-xl text-gray-700 font-medium mb-6">
                Met de huidige energieprijzen is het rendement van uw airco belangrijker dan ooit. Een efficiënte airco (warmtepomp) koelt én verwarmt uw woning tegen minimale kosten.
            </p>
            <p className="mb-4">
                Het rendement van een airco wordt uitgedrukt in <strong>SEER</strong> (koelen) en <strong>SCOP</strong> (verwarmen). Hoe hoger dit getal, hoe zuiniger het apparaat. Een SEER van 8.5 betekent bijvoorbeeld dat het apparaat voor elke 1 kW stroom maar liefst 8.5 kW aan koeling levert.
            </p>
            <p>
                Deze Top 5 bevat de 'groenste' keuzes uit ons assortiment. Modellen met een energielabel van A+++ die u helpen besparen op uw energierekening, zomer én winter.
            </p>
        </>
    );

    return (
        <TopListTemplate
            title="Top 5 Meest Energiezuinige Airco's (2026)"
            description="Bespaar op uw energierekening met de zuinigste airco's van dit moment. We rangschikken op SEER-waarde en energielabel A+++."
            category="Energiezuinige Airco's"
            introText={intro}
            products={products}
            slug="top-5-energiezuinige-aircos"
            rankingCriteria={[
                "SEER-waarde (Seizoensgebonden Energie Efficiëntie Ratio)",
                "Energielabel (A+++ prioritair)",
                "Aanwezigheid van bewegingssensoren (Intelligent Eye)",
                "Smart-functies voor energiebeheer (Wifi/App verbruiksinzicht)"
            ]}
        />
    );
}

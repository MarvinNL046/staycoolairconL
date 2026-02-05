import React from 'react';
import TopListTemplate from '../../components/templates/TopListTemplate';
import { aircoProducts } from '../../data/aircoProducts';

export default function Top10StilleAircos() {
    // Logic: Sort purely by noise level, only real products with images
    const products = aircoProducts
        .filter(p => {
            // Must have an image to be "real" and presentable
            if (!p.image) return false;

            // Exclude mock data if any slipped in (id starting with "mock")
            if (p.id.startsWith("mock")) return false;

            // Must have sound data
            return !!p.soundLevel || !!p.specifications?.['Geluidsvermogenniveau binnenunit (min)'];
        })
        .sort((a, b) => {
            const getDb = (p: typeof a) => {
                const dbSpec = p.specifications?.['Geluidsvermogenniveau binnenunit (min)'] || "";
                const dbMain = p.soundLevel || "";
                return parseInt((dbSpec || dbMain).match(/(\d+)/)?.[0] || "99");
            };

            const dbA = getDb(a);
            const dbB = getDb(b);

            if (dbA !== dbB) return dbA - dbB;
            // Tie breaker: ID (stable sort) instead of price since price is hidden/irrelevant
            return a.id.localeCompare(b.id);
        })
        .slice(0, 10);

    const intro = (
        <>
            <p className="lead text-xl text-gray-700 font-medium mb-6">
                Stilte is comfort. Of u nu thuis werkt, studeert of ontspant; een airco moet verkoelen zonder aanwezig te zijn.
            </p>
            <p className="mb-4">
                Moderne inverter airco's zijn vele malen stiller dan mobiele airco's of oudere systemen. De stilste modellen op de markt produceren tegenwoordig slechts <strong>19 dB(A)</strong>. Ter vergelijking: een ritselend blaadje is 10 dB en een rustige bibliotheek is 30 dB.
            </p>
            <p>
                In deze Top 10 rangschikken we de airco's uit ons assortiment puur op hun geluidsproductie in de stilste stand. Deze modellen zijn uitermate geschikt voor woonkamers, kantoren en uiteraard slaapkamers.
            </p>
        </>
    );

    return (
        <TopListTemplate
            title="Top 10 Stilste Airco's van 2026"
            description="Op zoek naar een fluisterstille airco? Bekijk onze Top 10 ranglijst van airconditioners met de laagste dB-waarden voor ultieme rust en comfort."
            category="Stille Airco's"
            introText={intro}
            products={products}
            slug="top-10-stille-aircos"
            rankingCriteria={[
                "Geluidsniveau (dB) binnenunit in stilste stand",
                "Kwaliteit van de compressor (trillingen buitenunit)",
                "Aanwezigheid van 'Silent Mode' functionaliteit",
                "Prijs-kwaliteitverhouding binnen het stille segment"
            ]}
        />
    );
}

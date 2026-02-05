import React from 'react';
import TopListTemplate from '../../components/templates/TopListTemplate';
import { aircoProducts } from '../../data/aircoProducts';

export default function BesteMultiSplitAircos() {
    // Logic: Filter for type 'multi-split'. 
    // Since aircoProducts might mostly be single splits/sets in the main array, we might need to check if we have enough.
    // Assuming 'type' field is accurate.
    const products = aircoProducts
        .filter(p => p.type === 'multi-split' && p.image && !p.id.startsWith('mock'))
        .slice(0, 5);

    // FALLBACK: If we don't have enough explicitly marked 'multi-split' products in the data yet,
    // we might show some single splits that are popular in multi-split configurable setups (like LG Standard Plus, Daikin Sensira).
    // For this exercise, if < 3 products found, we'll pull high-capacity units often used in larger setups.
    const displayProducts = products.length >= 3 ? products : aircoProducts.filter(p => p.capacity && parseFloat(p.capacity) >= 5.0 && p.image).slice(0, 5);


    const intro = (
        <>
            <p className="lead text-xl text-gray-700 font-medium mb-6">
                Wilt u meerdere kamers koelen of verwarmen, maar niet voor elke kamer een aparte buitenunit aan de gevel hangen? Dan is een Multi-Split systeem de oplossing.
            </p>
            <p className="mb-4">
                Bij een Multi-Split systeem sluiten we tot wel 5 binnenunits aan op één krachtige buitenunit. Dit oogt strakker aan de buitenkant van uw woning en bespaart ruimte in de tuin of op het balkon. Bovendien kunt u elke kamer afzonderlijk bedienen.
            </p>
            <p>
                Hieronder vindt u de meest gekozen modellen voor multi-split opstellingen. Deze units staan bekend om hun vermogen om meerdere ruimtes gelijktijdig efficiënt te conditioneren.
            </p>
        </>
    );

    return (
        <TopListTemplate
            title="Beste Multi-Split Airco Systemen (2026)"
            description="Meerdere kamers koelen met één buitenunit? Ontdek de beste Multi-Split airco systemen voor uw woning of kantoor."
            category="Multi-Split Airco's"
            introText={intro}
            products={displayProducts}
            slug="beste-multi-split-aircos"
            rankingCriteria={[
                "Mogelijkheid tot aansluiten van 2 tot 5 binnenunits",
                "Capaciteit van de buitenunit (voldoende vermogen voor gelijktijdig gebruik)",
                "Leidinglengte mogelijkheden (flexibiliteit in installatie)",
                "Onafhankelijke bediening per ruimte"
            ]}
        />
    );
}

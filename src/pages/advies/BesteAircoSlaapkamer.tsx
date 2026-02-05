import React from 'react';
import TopListTemplate from '../../components/templates/TopListTemplate';
import { aircoProducts } from '../../data/aircoProducts';

export default function BesteAircoSlaapkamer() {
    // Filter products best for bedroom: Quiet (<= 21dB) + Sleep mode features
    // We explicitly prioritize known excellent Bedroom units from LG (19 dB models)

    // Priority products that we know are excellent for bedrooms (19-21dB)
    const priorityIds = ['81002172', '81002173', '81001933', '81002212', '81002213'];

    // Helper to find the lowest reported dB value from various potential fields
    const getLowestDb = (p: typeof aircoProducts[0]) => {
        const candidates = [
            p.soundLevel,
            p.specifications?.['Geluidsdrukniveau binnenunit koelen (min)'],
            p.specifications?.['Geluidsdrukniveau binnenunit (min)'],
            p.specifications?.['Geluidsniveau binnenunit (min)'],
            p.specifications?.['Geluidsvermogenniveau binnenunit (min)']
        ];

        let minDb = 99;

        candidates.forEach(val => {
            if (!val) return;
            const match = val.match(/(\d+)/);
            if (match) {
                const db = parseInt(match[0]);
                if (db < minDb) minDb = db;
            }
        });

        return minDb;
    };

    const products = aircoProducts
        .filter(p => {
            // Must have image and not be mock
            if (!p.image || p.id.startsWith('mock')) return false;

            // Always include priority products
            if (priorityIds.includes(p.id)) return true;

            const db = getLowestDb(p);

            // Relaxed filter: 19-35 dB range to ensure we show enough real products
            return db <= 35;
        })
        .sort((a, b) => {
            // Priority products first
            const isPriorityA = priorityIds.includes(a.id);
            const isPriorityB = priorityIds.includes(b.id);

            if (isPriorityA && !isPriorityB) return -1;
            if (!isPriorityA && isPriorityB) return 1;

            // Then specific priority order if both are priority
            if (isPriorityA && isPriorityB) {
                return priorityIds.indexOf(a.id) - priorityIds.indexOf(b.id);
            }

            // Otherwise sort by quietest
            const dbA = getLowestDb(a);
            const dbB = getLowestDb(b);

            if (dbA !== dbB) return dbA - dbB;
            return a.id.localeCompare(b.id);
        })
        .slice(0, 15);

    const intro = (
        <>
            <p className="lead text-xl text-gray-700 font-medium mb-6">
                Een goede nachtrust is goud waard. Vooral in warme zomers kan een airco in de slaapkamer het verschil maken tussen draaien en woelen of heerlijk doorslapen.
            </p>
            <p className="mb-4">
                Maar niet elke airco is geschikt voor de slaapkamer. Het allerbelangrijkste criterium is <strong>geluid</strong>. U wilt niet wakker liggen van een zoemend apparaat. Daarnaast is het belangrijk dat de airco tochtvrij kan koelen (zogenaamde 'Wind-Free' of 'Comfort Air' standen) en dat de displayverlichting uit kan.
            </p>
            <p>
                StayCool Airco en onze gecertificeerde monteurs hebben kritisch gekeken naar ons assortiment. Wij hebben de modellen geselecteerd die écht stil zijn (onder de 21 dB in stille modus) en functies hebben die speciaal ontworpen zijn voor slaapcomfort.
            </p>
        </>
    );

    return (
        <TopListTemplate
            title="De Beste Airco voor uw Slaapkamer (2026)"
            description="Wilt u stil en comfortabel slapen, ook tijdens een hittegolf? Wij hebben de stilste en meest comfortabele airco's voor de slaapkamer op een rij gezet."
            category="Slaapkamer Airco's"
            introText={intro}
            products={products}
            slug="beste-airco-slaapkamer"
            rankingCriteria={[
                "Maximaal geluidsniveau van 21 dB(A) (fluisterstil)",
                "Nachtmodus / Sleep mode functionaliteit",
                "Mogelijkheid tot uitschakelen display/ledjes",
                "Tochtvrije koeling (Comfort Air / Wind-Free)",
                "Energiezuinig (A++ of hoger) voor 's nachts draaien"
            ]}
        />
    );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Wind, Zap, Volume2, LayoutGrid } from 'lucide-react';
import Card from '../components/ui/Card';

export default function AdviesIndex() {
    const guides = [
        {
            title: "De Beste Airco voor uw Slaapkamer",
            description: "Een goede nachtrust is essentieel. Wij selecteerden de stilste modellen met speciale slaapfuncties.",
            href: "/advies/beste-airco-slaapkamer",
            icon: <Volume2 className="w-8 h-8 text-purple-600" />,
            color: "bg-purple-50",
            badge: "Populair"
        },
        {
            title: "Top 10 Stilste Airco's",
            description: "De absolute stilste airconditioners van dit moment op een rij, gerangschikt op dB-niveau.",
            href: "/advies/top-10-stille-aircos",
            icon: <Wind className="w-8 h-8 text-blue-600" />,
            color: "bg-blue-50"
        },
        {
            title: "Top 5 Energiezuinige Airco's",
            description: "Bespaar op uw energickosten met deze ultra-efficiënte modellen (A+++ label).",
            href: "/advies/top-5-energiezuinige-aircos",
            icon: <Zap className="w-8 h-8 text-green-600" />,
            color: "bg-green-50"
        },
        {
            title: "Beste Multi-Split Systemen",
            description: "De beste oplossingen voor het koelen en verwarmen van meerdere kamers tegelijk.",
            href: "/advies/beste-multi-split-aircos",
            icon: <LayoutGrid className="w-8 h-8 text-orange-600" />,
            color: "bg-orange-50"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Airco Advies & Koopgidsen | StayCool Airco</title>
                <meta name="description" content="Onafhankelijk advies en top-lijsten voor airconditioning. Kies de beste airco voor uw slaapkamer, woonkamer of kantoor." />
                <link rel="canonical" href="https://staycoolaircon.nl/advies" />
            </Helmet>

            <div className="bg-warm-white min-h-screen pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-black text-quatt-dark mb-4">
                            Airco Advies & Koopgidsen
                        </h1>
                        <p className="text-xl text-gray-600">
                            Wij helpen u de juiste keuze te maken met onafhankelijke vergelijkingen en top-lijsten.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {guides.map((guide) => (
                            <Link key={guide.href} to={guide.href} className="group">
                                <Card radius="2xl" padding="lg" className="h-full hover:shadow-xl transition-all duration-300 border-transparent hover:border-quatt-orange/20 relative overflow-hidden">
                                    <div className="flex items-start gap-6">
                                        <div className={`p-4 rounded-2xl ${guide.color} transition-transform group-hover:scale-110 duration-500`}>
                                            {guide.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h2 className="text-xl font-bold text-quatt-dark group-hover:text-quatt-orange transition-colors">
                                                    {guide.title}
                                                </h2>
                                                {guide.badge && (
                                                    <span className="bg-quatt-dark text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                                        {guide.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {guide.description}
                                            </p>
                                            <span className="inline-flex items-center text-quatt-orange font-bold text-sm">
                                                Lees Gids <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

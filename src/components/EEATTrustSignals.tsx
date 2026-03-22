import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle, Calendar, Star, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EEATTrustSignalsProps {
  variant?: 'compact' | 'full';
  showCTA?: boolean;
  className?: string;
}

const trustBadges = [
  { icon: ShieldCheck, label: 'F-Gassen Gecertificeerd' },
  { icon: Award, label: '5 Jaar Garantie' },
  { icon: CheckCircle, label: '500+ Installaties' },
  { icon: Calendar, label: 'Sinds 2019 Actief' },
  { icon: Star, label: '\u2605 4.8/5 Klantwaardering' },
];

const expertiseColumns = [
  {
    title: 'Ervaring & Expertise',
    icon: ShieldCheck,
    points: [
      'Meer dan 500 installaties in heel Limburg',
      'Gecertificeerde F-gassen monteurs',
      'Alle grote merken: Tosot, Daikin, LG, Toshiba, Mitsubishi Heavy',
    ],
  },
  {
    title: 'Kwaliteit & Garantie',
    icon: Award,
    points: [
      '5 jaar garantie op installatiewerkzaamheden',
      'Behoud van fabrieksgarantie',
      'Professionele afwerking met oog voor detail',
    ],
  },
  {
    title: 'Service & Betrouwbaarheid',
    icon: CheckCircle,
    points: [
      'Reactie binnen 24 uur',
      'Installatie binnen 5 werkdagen mogelijk',
      'Transparante prijzen, geen verborgen kosten',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CompactVariant({ className }: { className?: string }) {
  return (
    <div
      className={`bg-blue-50 border border-blue-100 rounded-xl p-4 ${className ?? ''}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-700"
            >
              <Icon className="w-5 h-5 shrink-0" />
              {badge.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function FullVariant({ showCTA, className }: { showCTA?: boolean; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 ${className ?? ''}`}
    >
      {/* Trust badges row */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10"
      >
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-white/70 rounded-full px-4 py-2 shadow-sm"
            >
              <Icon className="w-5 h-5 shrink-0" />
              {badge.label}
            </span>
          );
        })}
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
      >
        Waarom Klanten voor StayCool Kiezen
      </motion.h2>

      {/* Three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseColumns.map((column) => {
          const Icon = column.icon;
          return (
            <motion.div
              key={column.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {column.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {column.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      {showCTA && (
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Gratis Offerte Aanvragen
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+31462021430"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            046 202 1430
          </a>
        </motion.div>
      )}
    </motion.section>
  );
}

export default function EEATTrustSignals({
  variant = 'compact',
  showCTA = false,
  className,
}: EEATTrustSignalsProps) {
  if (variant === 'compact') {
    return <CompactVariant className={className} />;
  }
  return <FullVariant showCTA={showCTA} className={className} />;
}

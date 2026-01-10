import React from 'react';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
  estimatedCost?: {
    currency: string;
    value: string;
  };
  image?: string;
  tools?: string[];
  supplies?: string[];
}

/**
 * HowToSchema Component
 * Generates JSON-LD structured data for HowTo rich snippets in Google Search
 * This enables step-by-step instructions display in search results
 *
 * @example
 * <HowToSchema
 *   name="Airco Installeren: Stap-voor-Stap Gids"
 *   description="Complete handleiding voor het installeren van een airco in uw woning"
 *   totalTime="PT2H"
 *   steps={[
 *     { name: "Locatie kiezen", text: "Bepaal de beste locatie voor de binnenunit..." },
 *     { name: "Unit bevestigen", text: "Bevestig de beugel aan de muur..." }
 *   ]}
 *   tools={["Boormachine", "Waterpas"]}
 *   supplies={["Montagebeugel", "Schroeven"]}
 * />
 */
export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  image,
  tools,
  supplies,
}: HowToSchemaProps) {
  if (!steps || steps.length === 0) return null;

  const schemaData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  // Add optional fields
  if (totalTime) {
    schemaData.totalTime = totalTime;
  }

  if (estimatedCost) {
    schemaData.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  if (image) {
    schemaData.image = image;
  }

  if (tools && tools.length > 0) {
    schemaData.tool = tools.map((tool) => ({
      '@type': 'HowToTool',
      name: tool,
    }));
  }

  if (supplies && supplies.length > 0) {
    schemaData.supply = supplies.map((supply) => ({
      '@type': 'HowToSupply',
      name: supply,
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

/**
 * Helper function to convert minutes to ISO 8601 duration
 */
export function minutesToISO8601(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0 && mins > 0) {
    return `PT${hours}H${mins}M`;
  } else if (hours > 0) {
    return `PT${hours}H`;
  } else {
    return `PT${mins}M`;
  }
}

/**
 * Helper function to create HowTo steps from simple array
 */
export function createHowToSteps(
  steps: { titel: string; beschrijving: string; afbeelding?: string }[]
): HowToStep[] {
  return steps.map((step) => ({
    name: step.titel,
    text: step.beschrijving,
    image: step.afbeelding,
  }));
}

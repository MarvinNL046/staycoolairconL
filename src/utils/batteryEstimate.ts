export interface BatteryEstimateInput {
  annualConsumption: number;
  solarProduction: number;
  currentSelfUsePercent: number;
  additionalSelfUsePercent: number;
  roundTripEfficiencyPercent: number;
  importPrice: number;
  exportPrice: number;
  investment: number;
}

/** Annual illustration after saldering ends; not a battery sizing or hourly dispatch model. */
export function estimateBattery(input: BatteryEstimateInput) {
  const positive = (value: number) => Number.isFinite(value) ? Math.max(0, value) : 0;
  const fraction = (value: number) => Math.min(100, positive(value)) / 100;
  const consumption = positive(input.annualConsumption);
  const solar = positive(input.solarProduction);
  const directUse = Math.min(consumption, solar * fraction(input.currentSelfUsePercent));
  const efficiency = fraction(input.roundTripEfficiencyPercent);
  const stored = efficiency === 0 ? 0 : Math.min(
    solar - directUse,
    solar * fraction(input.additionalSelfUsePercent),
    (consumption - directUse) / efficiency,
  );
  const delivered = stored * efficiency;
  const annualBenefit = delivered * positive(input.importPrice) - stored * positive(input.exportPrice);
  const investment = positive(input.investment);
  return { directUse, stored, delivered, annualBenefit,
    simplePayback: annualBenefit > 0 && investment > 0 ? investment / annualBenefit : null };
}

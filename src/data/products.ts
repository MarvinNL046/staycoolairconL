import { ProductData } from '../types/products';
import { cashflowVariants } from './cashflowVariants';
import { formatPrice,priceIncludingVat } from '../utils/installationPricing';
import { alphaessData } from './brands/alphaess';
import { daikinData } from './brands/daikin';
import { lgData } from './brands/lg';
import { lgMobieleAircoData } from './brands/lg-mobiele-airco';
import { mitsubishiHeavyData } from './brands/mitsubishi-heavy';
import { samsungData } from './brands/samsung';
import { toshibaData } from './brands/toshiba';
import { tosotData } from './brands/tosot';
import { tosotMobieleAircoData } from './brands/tosot-mobiele-airco';
import { aircoCoverData } from './brands/airco-covers';

const originalProductData: ProductData = {
  brands: [
    daikinData,
    lgData,
    lgMobieleAircoData,
    mitsubishiHeavyData,
    samsungData,
    toshibaData,
    tosotData,
    tosotMobieleAircoData,
    aircoCoverData,
    alphaessData,
    { name: 'Mitsubishi Electric', description: 'Bekijk Mitsubishi Electric aircosets en vraag advies over de uitvoering voor uw woning.', imageUrl: '/images/airco-products/mitsubishi-msz-hr35vf-main.webp', features: ['Single-split aircosets', 'Advies over de passende uitvoering'], models: [] },
    { name: 'MaxiCool', description: 'Bekijk MaxiCool aircosets voor koelen en verwarmen en vraag een offerte voor uw situatie.', imageUrl: '/images/airco-products/81002064_sk21947_MaxiCool_infini_main.webp', features: ['Single-split en multi-split systemen', 'Offerte afgestemd op uw situatie'], models: [] }
  ]
};

export const productData: ProductData = {
  brands: originalProductData.brands.map(brand => ({ ...brand, models: brand.models.map(model => {
    const offers = cashflowVariants.filter(p => p.family === `${brand.name}:${model.slug}`);
    const specifications = model.specifications.filter(s => !/prijs|prijzen|€/.test(s.label.toLowerCase() + ' ' + s.value));
    if (!offers.length) return { ...model, price: 'Prijs op aanvraag', specifications };
    const lowest = Math.min(...offers.map(p => priceIncludingVat(p.netCents, p.vatRate)));
    const capacities = [...new Set(offers.map(p => p.configuration.split(' · ')[0]))].join(', ');
    return { ...model, price: `Vanaf ${formatPrice(lowest)} inclusief btw, installatie en materialen`,
      capacity: capacities,
      specifications: specifications.map(s => /Beschikbare capaciteiten/i.test(s.label) ? { ...s, value: capacities } : s), cashflowOffers: offers };
  }) }))
};

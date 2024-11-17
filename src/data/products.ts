import { ProductData } from '../types/products';
import { daikinData } from './brands/daikin';
import { lgData } from './brands/lg';
import { mitsubishiHeavyData } from './brands/mitsubishi-heavy';
import { tosotData } from './brands/toshiba';

export const productData: ProductData = {
  brands: [
    daikinData,
    lgData,
    mitsubishiHeavyData,
    tosotData
  ]
};

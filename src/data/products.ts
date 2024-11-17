import { ProductData } from '../types/products';
import { daikinData } from './brands/daikin';
import { lgData } from './brands/lg';
import { mitsubishiHeavyData } from './brands/mitsubishi-heavy';
import { toshibaData } from './brands/toshiba';
import { tosotData } from './brands/tosot';

export const productData: ProductData = {
  brands: [
    daikinData,
    lgData,
    mitsubishiHeavyData,
    toshibaData,
    tosotData
  ]
};
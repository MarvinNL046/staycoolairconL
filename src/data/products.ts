import { ProductData } from '../types/products';
import { daikinData } from './brands/daikin';
import { lgData } from './brands/lg';
import { mitsubishiHeavyData } from './brands/mitsubishi-heavy';
import { samsungData } from './brands/samsung';
import { toshibaData } from './brands/toshiba';
import { tosotData } from './brands/tosot';
import { aircoCoverData } from './brands/airco-covers';

export const productData: ProductData = {
  brands: [
    daikinData,
    lgData,
    mitsubishiHeavyData,
    samsungData,
    toshibaData,
    tosotData,
    aircoCoverData
  ]
};

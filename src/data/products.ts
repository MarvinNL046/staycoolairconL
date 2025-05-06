import { ProductData } from '../types/products';
import { daikinData } from './brands/daikin';
import { lgData } from './brands/lg';
import { lgMobieleAircoData } from './brands/lg-mobiele-airco';
import { mitsubishiHeavyData } from './brands/mitsubishi-heavy';
import { samsungData } from './brands/samsung';
import { toshibaData } from './brands/toshiba';
import { tosotData } from './brands/tosot';
import { tosotMobieleAircoData } from './brands/tosot-mobiele-airco';
import { aircoCoverData } from './brands/airco-covers';

export const productData: ProductData = {
  brands: [
    daikinData,
    lgData,
    lgMobieleAircoData,
    mitsubishiHeavyData,
    samsungData,
    toshibaData,
    tosotData,
    tosotMobieleAircoData,
    aircoCoverData
  ]
};

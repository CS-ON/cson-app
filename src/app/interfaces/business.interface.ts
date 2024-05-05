import { BusinessType } from '../enums/business.type.enum';
import { Suscription } from './suscription.interface';

export interface Business {
  id: string;
  name: string;
  description: string;
  type: BusinessType;
  suscription: Suscription;
  images: string[];
}

import { BusinessType } from '../enums/business.type.enum';
import { Reward } from './reward.interface';
import { Suscription } from './suscription.interface';

export interface Business {
  id: string;
  name: string;
  description: string;
  type: BusinessType;
  suscription?: Suscription;
  schedule: string;
  logo: string;
  gallery?: string[];
  location: string;
  rewards: Reward[]
}

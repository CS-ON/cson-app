import { BusinessLocation } from './business-location.interface';

export interface Offer {
  id: string;
  name: string;
  description: string;
  businessLocation: BusinessLocation;
  rewardPoints: number;
  expirationDate?: Date;
}

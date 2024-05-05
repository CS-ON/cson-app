import { BusinessLocation } from './business-location.interface';
import { OfferBonus } from './offer-bonus.interface';

export interface Offer {
  id: string;
  name: string;
  description: string;
  businessLocation: BusinessLocation;
  rewardPoints: number;
  expirationDate?: Date;
  bonus?: OfferBonus;
}

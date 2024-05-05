import { Offer } from '../../interfaces/offer.interface';

export type OfferUpdateFields = Pick<
  Offer,
  'name' | 'description' | 'rewardPoints' | 'expirationDate'
>;

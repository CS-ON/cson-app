import { Offer } from '../../interfaces/offer.interface';

export type OfferUpdateFields = Pick<
  Partial<Offer>,
  'name' | 'description' | 'rewardPoints' | 'expirationDate'
>;

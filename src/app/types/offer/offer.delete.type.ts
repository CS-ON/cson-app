import { Offer } from '../../interfaces/offer.interface';

export type OfferDelete = Omit<Offer, 'id'>;

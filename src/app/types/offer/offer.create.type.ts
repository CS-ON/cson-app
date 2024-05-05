import { Offer } from '../../interfaces/offer.interface';

export type OfferCreate = Omit<Offer, 'id'>;

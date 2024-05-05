import { Offer } from '../../interfaces/offer.interface';

export type OfferUserCreate = Omit<Offer, 'id'>;

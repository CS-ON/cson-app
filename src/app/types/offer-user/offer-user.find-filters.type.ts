import { OfferUser } from '../../interfaces/offer-user.interface';

export type OfferUserFindFilters =
  | Pick<Partial<OfferUser>, 'userId'>
  | {
      offerId?: string;
    };

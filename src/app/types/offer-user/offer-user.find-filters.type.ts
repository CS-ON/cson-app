import { OfferUser } from '../../interfaces/offer-user.interface';

export type OfferUserFindFilters =
  | Pick<OfferUser, 'userId'>
  | {
      offerId?: string;
    };

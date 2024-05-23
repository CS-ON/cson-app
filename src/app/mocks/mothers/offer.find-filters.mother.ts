import { OfferFindFilters } from '../../interfaces/offer.find-filters.interface';
import { RandomUtils } from '../random.utils';

export class OfferFindFiltersMother {
  static getRandom(partial?: Partial<OfferFindFilters>): OfferFindFilters {
    return Object.assign(
      {
        businessId: RandomUtils.randomUuid(),
        locationId: RandomUtils.randomUuid(),
      },
      partial
    );
  }
}

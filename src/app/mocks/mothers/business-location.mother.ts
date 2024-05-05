import { BusinessLocation } from '../../interfaces/business-location.interface';
import { RandomUtils } from '../random.utils';
import { LocationMother } from './location.mother';

export class BusinessLocationMother {
  static getRandom(partial?: Partial<BusinessLocation>): BusinessLocation {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        businessId: RandomUtils.randomUuid(),
        location: LocationMother.getRandom(),
      },
      partial
    );
  }
}

import { BusinessLocationCreate } from '../../interfaces/business-location.create.interface';
import { RandomUtils } from '../random.utils';

export class BusinessLocationCreateMother {
  static getRandom(
    partial?: Partial<BusinessLocationCreate>
  ): BusinessLocationCreate {
    return Object.assign(
      {
        businessId: RandomUtils.randomUuid(),
        locationId: RandomUtils.randomBusinessName(),
      },
      partial
    );
  }
}

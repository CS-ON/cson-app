import { BusinessType } from '../../enums/business.type.enum';
import { Business } from '../../interfaces/business.interface';
import { RandomUtils } from '../random.utils';
import { SuscriptionMother } from './suscription.mother';

export class BusinessMother {
  static getRandom(partial?: Partial<Business>): Business {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomBusinessName(),
        description: RandomUtils.randomString(200),
        type: RandomUtils.randomArrayElement(Object.values(BusinessType)),
        suscription: SuscriptionMother.getRandom(),
        images: [
          RandomUtils.randomString(200),
          RandomUtils.randomString(200),
          RandomUtils.randomString(200),
        ],
      },
      partial
    );
  }
}

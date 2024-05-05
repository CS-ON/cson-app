import { SuscriptionType } from '../../enums/suscription.type.enum';
import { Suscription } from '../../interfaces/suscription.interface';
import { RandomUtils } from '../random.utils';

export class SuscriptionMother {
  static getRandom(partial?: Partial<Suscription>): Suscription {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomString(25),
        type: RandomUtils.randomArrayElement(Object.values(SuscriptionType)),
        maxOffersMonth: RandomUtils.randomNumber(50, 200),
        monthPrice: RandomUtils.randomNumber(10, 500),
      },
      partial
    );
  }
}

import { Offer } from '../../interfaces/offer.interface';
import { RandomUtils } from '../random.utils';
import { BusinessLocationMother } from './business-location.mother';
import { OfferBonusMother } from './offer-bonus.mother';

export class OfferMother {
  static getRandom(partial?: Partial<Offer>): Offer {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomOfferName(),
        description: RandomUtils.randomString(200),
        businessLocation: BusinessLocationMother.getRandom(),
        rewardPoints: RandomUtils.randomNumber(40, 1000),
        expirationDate: RandomUtils.randomBoolean()
          ? undefined
          : RandomUtils.randomDate(
              new Date(2020, 5, 10),
              new Date(2025, 12, 15)
            ),
        bonus: RandomUtils.randomBoolean()
          ? undefined
          : OfferBonusMother.getRandom(),
      },
      partial
    );
  }
}

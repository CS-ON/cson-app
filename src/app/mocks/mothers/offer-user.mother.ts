import { OfferUserStatus } from '../../enums/offer-user.status.enum';
import { OfferUser } from '../../interfaces/offer-user.interface';
import { RandomUtils } from '../random.utils';
import { OfferMother } from './offer.mother';

export class OfferUserMother {
  static getRandom(partial?: Partial<OfferUser>): OfferUser {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        offer: OfferMother.getRandom(),
        userId: RandomUtils.randomUuid(),
        levelId: RandomUtils.randomUuid(),
        levelExtraPoints: RandomUtils.randomNumber(20, 2000),
        status: RandomUtils.randomArrayElement(Object.values(OfferUserStatus)),
      },
      partial
    );
  }
}

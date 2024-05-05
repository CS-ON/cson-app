import { OfferBonus } from '../../interfaces/offer-bonus.interface';
import { RandomUtils } from '../random.utils';

export class OfferBonusMother {
  static getRandom(partial?: Partial<OfferBonus>): OfferBonus {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        from: RandomUtils.randomDate(
          new Date(2020, 5, 10),
          new Date(2025, 12, 15)
        ),
        to: RandomUtils.randomDate(
          new Date(2020, 5, 10),
          new Date(2025, 12, 15)
        ),
        bonusPoints: RandomUtils.randomNumber(20, 2000),
      },
      partial
    );
  }
}

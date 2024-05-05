import { LevelExtraPointsType } from '../../enums/level.extra-points.type.enum';
import { Level } from '../../interfaces/level.interface';
import { RandomUtils } from '../random.utils';

export class LevelMother {
  static getRandom(partial?: Partial<Level>): Level {
    const extraPointsType: LevelExtraPointsType =
      RandomUtils.randomArrayElement(Object.values(LevelExtraPointsType));
    const maxOfferPoints: number =
      extraPointsType === LevelExtraPointsType.PERCENTAGE ? 100 : 5000;

    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomString(30),
        description: RandomUtils.randomString(100),
        extraOfferPoints: RandomUtils.randomNumber(20, maxOfferPoints),
        extraPointsType,
      },
      partial
    );
  }
}

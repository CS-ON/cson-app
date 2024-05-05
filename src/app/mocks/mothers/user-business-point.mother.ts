import { UserBusinessPoint } from '../../interfaces/user-business-point.interface';
import { RandomUtils } from '../random.utils';
import { LevelMother } from './level.mother';

export class UserBusinessPointMother {
  static getRandom(partial?: Partial<UserBusinessPoint>): UserBusinessPoint {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        userId: RandomUtils.randomUuid(),
        businessId: RandomUtils.randomUuid(),
        level: LevelMother.getRandom(),
        accumulatedPoints: RandomUtils.randomNumber(0, 10000),
      },
      partial
    );
  }
}

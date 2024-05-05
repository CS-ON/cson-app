import { LeaderboardPosition } from '../../interfaces/leaderboard-position.interface';
import { RandomUtils } from '../random.utils';

export class LeaderboardPositionMother {
  static getRandom(
    partial?: Partial<LeaderboardPosition>
  ): LeaderboardPosition {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        leaderboardId: RandomUtils.randomUuid(),
        user: { name: RandomUtils.randomUserName() },
        position: RandomUtils.randomNumber(1, 10000),
      },
      partial
    );
  }
}

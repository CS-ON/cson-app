import { LeaderboardPeriod } from '../../enums/leaderboard.period.enum';
import { Leaderboard } from '../../interfaces/leaderboard.interface';
import { RandomUtils } from '../random.utils';

export class LeaderboardMother {
  static getRandom(partial?: Partial<Leaderboard>): Leaderboard {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        businessId: RandomUtils.randomUuid(),
        date: RandomUtils.randomDate(
          new Date(2020, 5, 10),
          new Date(2025, 12, 15)
        ),
        period: RandomUtils.randomArrayElement(
          Object.values(LeaderboardPeriod)
        ),
      },
      partial
    );
  }
}

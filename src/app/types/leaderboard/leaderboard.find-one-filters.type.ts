import { Leaderboard } from '../../interfaces/leaderboard.interface';

export type LeaderboardFindOneFilters = Pick<
  Partial<Leaderboard>,
  'date' | 'businessId' | 'period'
>;

import { LeaderboardPosition } from '../../interfaces/leaderboard-position.interface';

export type LeaderboardPositionFindFilters =
  | Pick<Partial<LeaderboardPosition>, 'leaderboardId'>
  | { userId?: string };

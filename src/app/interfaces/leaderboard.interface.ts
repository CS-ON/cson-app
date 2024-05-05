import { LeaderboardPeriod } from '../enums/leaderboard.period.enum';

export interface Leaderboard {
  id: string;
  businessId?: string;
  date: Date;
  period: LeaderboardPeriod;
}

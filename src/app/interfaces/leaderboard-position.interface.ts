import { User } from './user.interface';

export interface LeaderboardPosition {
  id: string;
  leaderboardId: string;
  user: Pick<User, 'name'>;
  position: number;
}

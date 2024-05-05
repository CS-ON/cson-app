import { Level } from './level.interface';

export interface UserBusinessPoint {
  id: string;
  userId: string;
  businessId: string;
  level: Level;
  accumulatedPoints: number;
}

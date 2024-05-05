import { LevelExtraPointsType } from '../enums/level.extra-points.type.enum';

export interface Level {
  id: string;
  name: string;
  description: string;
  extraOfferPoints: number;
  extraPointsType: LevelExtraPointsType;
}

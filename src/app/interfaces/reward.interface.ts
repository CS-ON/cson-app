export interface Reward {
  id?: number;
  name: string;
  description: string;
  validityDate: Date;
  claimed: boolean;
  claimDate?: Date;
  points: number;
}

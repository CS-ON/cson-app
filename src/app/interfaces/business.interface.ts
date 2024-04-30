export interface Business {
  id?: number;
  name: string;
  description: string;
  type: string;
  location: string;
  gallery: string[];
  schedule: Date;
  rewards: number[];
}

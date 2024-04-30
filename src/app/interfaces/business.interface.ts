export interface Business {
  id?: number;
  name: string;
  description: string;
  location: string;
  gallery: string[];
  schedule: Date;
  rewards: number[];
}

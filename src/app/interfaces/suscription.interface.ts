import { SuscriptionType } from '../enums/suscription.type.enum';

export interface Suscription {
  id: string;
  name: string;
  type: SuscriptionType;
  maxOffersMonth: number;
  monthPrice?: number;
}

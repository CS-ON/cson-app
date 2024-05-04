import { Suscription } from '../../interfaces/suscription.interface';

export type SuscriptionUpdateFields = Pick<
  Suscription,
  'name' | 'maxOffersMonth' | 'monthPrice'
>;

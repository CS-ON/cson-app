import { Suscription } from '../../interfaces/suscription.interface';

export type SuscriptionUpdateFields = Pick<
  Partial<Suscription>,
  'name' | 'maxOffersMonth' | 'monthPrice'
>;

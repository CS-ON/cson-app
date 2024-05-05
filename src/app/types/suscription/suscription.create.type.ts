import { Suscription } from '../../interfaces/suscription.interface';

export type SuscriptionCreate = Omit<Suscription, 'id'>;

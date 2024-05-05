import { Business } from '../../interfaces/business.interface';

export type BusinessCreate = Omit<Business, 'id'>;

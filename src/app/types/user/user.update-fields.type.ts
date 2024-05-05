import { User } from '../../interfaces/user.interface';

export type UserUpdateFields = Pick<Partial<User>, 'email' | 'tlf'>;

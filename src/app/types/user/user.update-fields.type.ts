import { User } from '../../interfaces/user.interface';

export type UserUpdateFields = Pick<User, 'email' | 'tlf'>;

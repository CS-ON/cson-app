import { User } from '../../interfaces/user.interface';

export type UserCreate = Omit<User, 'id'>;

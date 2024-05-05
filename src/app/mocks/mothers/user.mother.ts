import { User } from '../../interfaces/user.interface';
import { RandomUtils } from '../random.utils';

export class UserMother {
  static getRandom(partial?: Partial<User>): User {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomUserName(),
        email: RandomUtils.randomEmail(),
        tlf: RandomUtils.randomNumber(600000000, 700000000),
      },
      partial
    );
  }
}

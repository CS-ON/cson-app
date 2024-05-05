import { BusinessEmployee } from '../../interfaces/business-employee.interface';
import { RandomUtils } from '../random.utils';

export class BusinessEmployeeMother {
  static getRandom(partial?: Partial<BusinessEmployee>): BusinessEmployee {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        businessId: RandomUtils.randomUuid(),
        name: RandomUtils.randomBusinessName(),
        email: RandomUtils.randomEmail(),
      },
      partial
    );
  }
}

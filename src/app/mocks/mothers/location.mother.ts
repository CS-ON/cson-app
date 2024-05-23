import { RandomUtils } from '../random.utils';
import { Location } from '../../interfaces/location.interface';

export class LocationMother {
  static getRandom(partial?: Partial<Location>): Location {
    return Object.assign(
      {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomCity(),
        isoCountry: RandomUtils.randomCountryIso(),
        zipCode: RandomUtils.randomZipCode(),
      },
      partial
    );
  }
}

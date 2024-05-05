import { v4 } from 'uuid';
import { businessNames } from './data/business-name.data';
import { emails } from './data/email.data';
import { offerNames } from './data/offer-names.data';
import { userNames } from './data/user-names.data';
import { cities } from './data/cities.data';
import { zipCodes } from './data/zip-codes.data';
import { countriesIso } from './data/country-iso.data';

export class RandomUtils {
  static randomUuid(): string {
    return v4();
  }
  static randomDate(start: Date, end: Date): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  static randomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static randomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  static randomArrayElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static randomBusinessName(): string {
    return RandomUtils.randomArrayElement<string>(businessNames);
  }

  static randomUserName(): string {
    return RandomUtils.randomArrayElement<string>(userNames);
  }

  static randomOfferName(): string {
    return RandomUtils.randomArrayElement<string>(offerNames);
  }

  static randomEmail(): string {
    return RandomUtils.randomArrayElement<string>(emails);
  }

  static randomCity(): string {
    return RandomUtils.randomArrayElement<string>(cities);
  }

  static randomZipCode(): string {
    return RandomUtils.randomArrayElement<string>(zipCodes);
  }

  static randomCountryIso(): string {
    return RandomUtils.randomArrayElement<string>(countriesIso);
  }
}

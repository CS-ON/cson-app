import { BusinessLocation } from '../../interfaces/business-location.interface';

export type BusinessLocationFindFilters =
  | Pick<BusinessLocation, 'businessId'>
  | { locationId: string };

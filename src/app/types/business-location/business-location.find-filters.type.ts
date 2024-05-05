import { BusinessLocation } from '../../interfaces/business-location.interface';

export type BusinessLocationFindFilters =
  | Pick<Partial<BusinessLocation>, 'businessId'>
  | { locationId?: string };

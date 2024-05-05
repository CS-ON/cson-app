import { BusinessEmployee } from '../../interfaces/business-employee.interface';

export type BusinessEmployeeUpdateFields = Pick<
  Partial<BusinessEmployee>,
  'name' | 'email'
>;

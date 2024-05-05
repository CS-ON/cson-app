import { BusinessEmployee } from '../../interfaces/business-employee.interface';

export type BusinessEmployeeUpdateFields = Pick<
  BusinessEmployee,
  'name' | 'email'
>;

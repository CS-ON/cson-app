import { BusinessEmployee } from '../../interfaces/business-employee.interface';

export type BusinessEmployeeCreate = Omit<BusinessEmployee, 'id'>;

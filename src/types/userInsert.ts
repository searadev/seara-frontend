import { Role } from './role';

export type UserInsert = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Role[];
};

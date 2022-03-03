import {ISchemaStructure} from '../../../../utils/schemaObjectValidator';
import {ILogin} from './login.types';

export const loginSchema = {
  email: {
    test(value: string) {
      return value.length > 0;
    },
    errorMessage: 'Email is invalid',
  },
  password: {
    test(value: string) {
      return value.length > 0;
    },
  },
} as ISchemaStructure<ILogin>;

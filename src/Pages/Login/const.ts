import * as Yup from 'yup';

import { emailValidation, requiredField } from '../../consts/validation';

import { User } from '../../Types/user';

export const loginFormInitialValues: User = {
  email: '',
  password: '',
};

export const loginValidationSchema: Yup.ObjectSchema<User> = Yup.object().shape({
  email: Yup.string().email().required(requiredField),
  password: Yup.string().required(emailValidation),
});

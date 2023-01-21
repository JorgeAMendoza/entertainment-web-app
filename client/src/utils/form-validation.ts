import * as Yup from 'yup';
import validator from 'validator';

export const loginFormValidation = Yup.object({
  email: Yup.string().required("Can't be blank").email('Invalid email'),
  password: Yup.string().required("Can't be blank"),
});

export const signUpValidation = Yup.object({
  email: Yup.string().required("Can't be blank").email('Invalid email'),
  name: Yup.string().required("Can't be blank"),
  password: Yup.string()
    .test('valid', 'Invalid', (val) => {
      if (!val) return true;
      if (validator.isStrongPassword(val)) return true;
      else return false;
    })
    .required("Can't be blank"),
  repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'No match'),
});

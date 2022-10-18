import * as Yup from 'yup';
import validator from 'validator';

// const uppercaseRegex = /[A-Z]/g;
// const lowercaseRegex = /[a-z]/g;
// const numberRegex = /[1-9]/g;

export const loginFormValidation = Yup.object({
  email: Yup.string().required("can't be blank").email('invalid email'),
  password: Yup.string().required("can't be blank"),
});

export const signUpValidation = Yup.object({
  email: Yup.string().required("can't be blank").email('invalid email'),
  name: Yup.string().required("can't be blank"),
  password: Yup.string()
    .test('valid', 'invalid password', (val) => {
      if (!val) return true;
      if (validator.isStrongPassword(val)) return true;
      else return false;
    })
    .required("can't be blank"),
});

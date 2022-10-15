import * as Yup from 'yup';

export const loginFormValidation = Yup.object({
  email: Yup.string().required("can't be blank").email(),
  password: Yup.string().required("can't be blank"),
});

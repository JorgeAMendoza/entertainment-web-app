import { Formik, Form } from 'formik';
import { useSignUpUserMutation } from '../generated/graphql';
import logoIcon from '../assets/logo.svg';
import { SignUpForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { signUpValidation } from '../utils/form-validation';
import { ApolloError } from '@apollo/client';

const initialValues: SignUpForm = {
  email: '',
  password: '',
  name: '',
  repeatPassword: '',
};

const SignUpRoute = () => {
  const [signUpUser, { loading, error }] = useSignUpUserMutation();
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <img src={logoIcon} alt="entertainment logo" />
      </div>

      {error && <p>{error.message}</p>}

      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpValidation}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            void signUpUser({
              variables: {
                email: values.email,
                name: values.name,
                password: values.password,
              },
            })
              .then((data) => {
                if (!data.data) return;

                localStorage.setItem(
                  'token',
                  JSON.stringify(data.data.signUpUser.token)
                );
                navigate('/dashboard', {
                  state: { token: data.data.signUpUser.token },
                });
              })
              .catch((e: unknown) => {
                if (e instanceof ApolloError) {
                  const message = e.message;

                  if (message.includes('email'))
                    actions.setFieldError('email', 'invalid email');
                  else if (message.includes('password'))
                    actions.setFieldError('password', 'invalid password');
                }
              });
          }}
        >
          <Form data-cy="signUpForm">
            <label data-cy="signUpEmail">
              <TextField
                name="email"
                type="text"
                id="email"
                placeholder="email address"
              />
            </label>

            <label data-cy="signUpName">
              <TextField name="name" type="text" id="name" placeholder="name" />
            </label>

            <label data-cy="signUpPassword">
              <TextField
                name="password"
                type="password"
                id="password"
                placeholder="password"
              />
              <div>
                <p>Password must meet the following criteria:</p>
                <ul>
                  <li>8 characters long</li>
                  <li>1 lowercase letter</li>
                  <li>1 uppercase letter</li>
                  <li>1 number</li>
                  <li>1 special character (!?&)</li>
                </ul>
              </div>
            </label>

            <label data-cy="signUpRepeatPassword">
              <TextField
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                placeholder="repeat password"
              />
            </label>

            <button type="submit" data-cy="signUpButton">
              {loading ? 'loading...' : 'create an account'}
            </button>
          </Form>
        </Formik>
        <p>
          Already have an account?{' '}
          <Link to="/login" data-cy="loginLink">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpRoute;

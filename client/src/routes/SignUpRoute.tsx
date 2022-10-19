import { Formik, Form } from 'formik';
import { useSignUpUserMutation } from '../generated/graphql';
import logoIcon from '../assets/logo.svg';
import { SignUpForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/login-context';
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
  const { setToken } = useLoginContext();
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
            void signUpUser({
              variables: {
                email: values.email,
                name: values.name,
                password: values.password,
              },
            })
              .then((data) => {
                if (data.data) setToken(data.data.signUpUser.token);
                else return;

                navigate('/dashboard');
                actions.setSubmitting(false);
              })
              .catch((e: unknown) => {
                if (e instanceof ApolloError) {
                  const message = e.message;

                  if (message.includes('email'))
                    actions.setFieldError('email', 'invalid email');
                  else if (message.includes('password'))
                    actions.setFieldError('password', 'invalid password');
                }
                actions.setSubmitting(false);
              });
          }}
        >
          <Form data-testid="signUpForm">
            <label data-testid="signUpEmail">
              <TextField
                name="email"
                type="text"
                id="email"
                placeholder="email address"
              />
            </label>

            <label data-testid="signUpName">
              <TextField name="name" type="text" id="name" placeholder="name" />
            </label>

            <label data-testid="signUpPassword">
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

            <label data-testid="signUpRepeatPassword">
              <TextField
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                placeholder="repeat password"
              />
            </label>

            <button type="submit" data-testid="signUpButton">
              {loading ? 'loading...' : 'create an account'}
            </button>
          </Form>
        </Formik>
        <p>
          Already have an account?{' '}
          <Link to="/login" data-testid="loginLink">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpRoute;

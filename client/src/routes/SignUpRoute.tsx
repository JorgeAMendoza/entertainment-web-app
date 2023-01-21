import { Formik, Form } from 'formik';
import { useSignUpUserMutation } from '../generated/graphql';
import logoIcon from '../assets/logo.svg';
import { SignUpForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { signUpValidation } from '../utils/form-validation';
import { ApolloError } from '@apollo/client';
import saveToken from '../utils/save-token';
import Styled from '../styles/utils/LoginSignup/LoginSignup.styled';
import Container from '../styles/utils/Container.styled';

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
    <Container>
      <Styled.PageContainer>
        <div>
          <img src={logoIcon} alt="entertainment logo" />
        </div>

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

                saveToken(data.data.signUpUser.token);
                navigate('/dashboard', {
                  state: { token: data.data.signUpUser.token },
                });
              })
              .catch((e: unknown) => {
                if (e instanceof ApolloError) {
                  const message = e.message;

                  if (message.includes('email'))
                    actions.setFieldError('email', 'Invalid email');
                  else if (message.includes('password'))
                    actions.setFieldError('password', 'Invalid');
                }
              });
          }}
        >
          {({ errors, touched }) => (
            <Styled.AuthForm data-cy="signUpForm">
              <h1>Sign Up</h1>
              <div>
                <Styled.InputLabel
                  error={errors.email && touched.email ? true : false}
                  data-cy="signUpEmail"
                >
                  <TextField
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Email address"
                  />
                </Styled.InputLabel>

                <Styled.InputLabel
                  error={errors.name && touched.name ? true : false}
                  data-cy="signUpName"
                >
                  <TextField
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                  />
                </Styled.InputLabel>

                <Styled.InputLabel
                  error={errors.password && touched.password ? true : false}
                  data-cy="signUpPassword"
                >
                  <TextField
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                  {/* <div>
                    <p>Password must meet the following criteria:</p>
                    <ul>
                      <li>8 characters long</li>
                      <li>1 lowercase letter</li>
                      <li>1 uppercase letter</li>
                      <li>1 number</li>
                      <li>1 special character (!?&)</li>
                    </ul>
                  </div> */}
                </Styled.InputLabel>
                <Styled.InputLabel
                  error={
                    errors.repeatPassword && touched.repeatPassword
                      ? true
                      : false
                  }
                  data-cy="signUpRepeatPassword"
                >
                  <TextField
                    name="repeatPassword"
                    type="password"
                    id="repeatPassword"
                    placeholder="Repeat password"
                  />
                </Styled.InputLabel>
              </div>

              <Styled.ActionButton type="submit" data-cy="signUpButton">
                {loading ? 'loading...' : 'Create an account'}
              </Styled.ActionButton>
              <Styled.SignUpText>
                Already have an account?{' '}
                <span>
                  <Link to="/login" data-cy="loginLink">
                    Login
                  </Link>
                </span>
              </Styled.SignUpText>
            </Styled.AuthForm>
          )}
        </Formik>

        {error && <p data-cy="signUpError">{error.message}</p>}
      </Styled.PageContainer>
    </Container>
  );
};

export default SignUpRoute;

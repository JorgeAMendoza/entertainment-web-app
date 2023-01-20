import { Formik } from 'formik';
import { useLoginUserMutation } from '../../generated/graphql';
import { LoginForm } from '../../types/form-props';
import TextField from '../../components/TextField/TextField';
import { loginFormValidation } from '../../utils/form-validation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/logo.svg';
import saveToken from '../../utils/save-token';
import { useEffect, useState } from 'react';
import Container from '../../styles/utils/Container.styled';
import Styled from '../../styles/utils/LoginSignup/LoginSignup.styled';

const initialValues: LoginForm = {
  email: '',
  password: '',
};

interface LocationStateLogin {
  logoutMessage: string;
}

const LoginRoute = () => {
  const [loginUser, { loading, error }] = useLoginUserMutation();
  const [logoutMessage, setLogoutMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as LocationStateLogin;
    if (state && state.logoutMessage) setLogoutMessage(state.logoutMessage);

    // at some point, the logout messagwe may be a seperate component where it appears fro three seconds and then dissapears.
    const logoutMessage = setTimeout(() => {
      setLogoutMessage('');
    }, 2500);
    return () => clearInterval(logoutMessage);
  }, [location]);

  return (
    <Container>
      <Styled.PageContainer>
        <div>
          <img src={logoIcon} alt="entertainment logo" />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={loginFormValidation}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            void loginUser({
              variables: { email: values.email, password: values.password },
            })
              .then((data) => {
                if (!data.data) return;

                saveToken(data.data.loginUser.token);
                navigate('/dashboard', {
                  state: { token: data.data.loginUser.token },
                });
              })
              .catch((e: unknown) => {
                if (e instanceof Error) console.log(e);
              });
          }}
        >
          {({ errors, touched }) => (
            <Styled.AuthForm data-cy="loginForm">
              <h1>Login</h1>
              <div>
                <Styled.InputLabel
                  error={errors.email && touched.email ? true : false}
                  data-cy="loginEmail"
                >
                  <TextField
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Email address"
                  />
                </Styled.InputLabel>
                <Styled.InputLabel
                  error={errors.password && touched.password ? true : false}
                  data-cy="loginPassword"
                >
                  <TextField
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                </Styled.InputLabel>
              </div>

              <Styled.ActionButton type="submit" data-cy="loginButton">
                {loading ? '...loading' : 'Login to your account'}
              </Styled.ActionButton>
              <Styled.SignUpText>
                Don&apos;t have an account?{' '}
                <span>
                  <Link to="/sign-up" data-cy="signUpLink">
                    Sign Up
                  </Link>
                </span>
              </Styled.SignUpText>
            </Styled.AuthForm>
          )}
        </Formik>
        {error && (
          <Styled.AuthError data-cy="loginError">
            {error.message}
          </Styled.AuthError>
        )}
        {logoutMessage && (
          <Styled.LogoutMessage data-cy="logoutMessage">
            {logoutMessage}
          </Styled.LogoutMessage>
        )}
      </Styled.PageContainer>
    </Container>
  );
};

export default LoginRoute;

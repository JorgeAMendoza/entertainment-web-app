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
  }, [location]);

  return (
    <Container>
      <Styled.PageContainer>
        <div>
          {logoutMessage && <p data-cy="logoutMessage">{logoutMessage}</p>}
        </div>
        <div>
          <img src={logoIcon} alt="entertainment logo" />
        </div>

        {error && <p data-cy="loginError">{error.message}</p>}

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
          <Styled.AuthForm data-cy="loginForm">
            <h1>Login</h1>
            <div>
              <label data-cy="loginEmail">
                <TextField
                  name="email"
                  type="text"
                  id="email"
                  placeholder="email address"
                />
              </label>
              <label data-cy="loginPassword">
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  placeholder="password"
                />
              </label>
            </div>

            <button type="submit" data-cy="loginButton">
              {loading ? '...loading' : 'log into your account'}
            </button>
            <p>
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" data-cy="signUpLink">
                Sign up
              </Link>
            </p>
          </Styled.AuthForm>
        </Formik>
      </Styled.PageContainer>
    </Container>
  );
};

export default LoginRoute;

import { Formik, Form } from 'formik';
import { useLoginUserMutation } from '../generated/graphql';
import { LoginForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { loginFormValidation } from '../utils/form-validation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo.svg';
import saveToken from '../utils/save-token';

const initialValues: LoginForm = {
  email: '',
  password: '',
};

const LoginRoute = () => {
  const [loginUser, { loading, error }] = useLoginUserMutation();
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <main>
      <div>
        <img src={logoIcon} alt="entertainment logo" />
      </div>

      {error && <p>{error.message}</p>}

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
        <Form>
          <label>
            <TextField
              name="email"
              type="text"
              id="email"
              placeholder="email address"
            />
          </label>
          <label>
            <TextField
              name="password"
              type="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">
            {loading ? '...loading' : 'log into your account'}
          </button>
        </Form>
      </Formik>

      <p>
        Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginRoute;

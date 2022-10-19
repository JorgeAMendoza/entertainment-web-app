import { Formik, Form } from 'formik';
import { useLoginUserMutation } from '../generated/graphql';
import { LoginForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { loginFormValidation } from '../utils/form-validation';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logo.svg';
import { useLoginContext } from '../context/login-context';

const initialValues: LoginForm = {
  email: '',
  password: '',
};

const LoginRoute = () => {
  const [loginUser, { loading, error }] = useLoginUserMutation();
  const { setToken } = useLoginContext();
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
        onSubmit={(values) => {
          void loginUser({
            variables: { email: values.email, password: values.password },
          })
            .then((data) => {
              if (data.data) setToken(data.data.loginUser.token);
              else return;

              navigate('/dashboard');
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

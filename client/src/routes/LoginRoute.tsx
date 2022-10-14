import { Formik, Form } from 'formik';
import { LoginForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.svg';

const initialValues: LoginForm = {
  email: '',
  password: '',
};

const LoginRoute = () => {
  return (
    <main>
      <div>
        <img src={logoIcon} alt="entertainment logo" />
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Submitting form');
          console.log('values');
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
          <button type="submit">login to your account</button>
        </Form>
      </Formik>

      <p>
        Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginRoute;

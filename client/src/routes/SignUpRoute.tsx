import { Formik, Form } from 'formik';
import { useSignUpUserMutation } from '../generated/graphql';
import logoIcon from '../assets/logo.svg';
import { SignUpForm } from '../types/form-props';
import TextField from '../components/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/login-context';
import { signUpValidation } from '../utils/form-validation';

const initialValues: SignUpForm = {
  email: '',
  password: '',
  name: '',
  repeatPassword: '',
};

const SignUpRoute = () => {
  return (
    <main>
      <div>
        <img src={logoIcon} alt="entertainment logo" />
      </div>

      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpValidation}
          onSubmit={(values) => {
            console.log(values);
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
              <TextField name="name" type="text" id="name" placeholder="name" />
            </label>

            <label>
              <TextField
                name="password"
                type="text"
                id="password"
                placeholder="password"
              />
            </label>

            <label>
              <TextField
                name="repeatPassword"
                type="password"
                id="repeatPassword"
                placeholder="repeat password"
              />
            </label>

            <button type="submit">create an account</button>
          </Form>
        </Formik>
        {/* <form>
          <label>
            <input type="text" placeholder="Email address" />
          </label>
          <label>
            <input type="Password" placeholder="Password" />
          </label>
          <label>
            <input type="Password" placeholder="Repeat Password" />
          </label>

          <button>create an account</button>
        </form> */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpRoute;

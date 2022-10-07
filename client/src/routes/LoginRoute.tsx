import logoIcon from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const LoginRoute = () => {
  return (
    <main>
      <div>
        <img src={logoIcon} alt="entertainment logo" />
      </div>

      <div>
        <h1>login</h1>
        <form>
          <label>
            <input type="text" placeholder="Email address" />
          </label>
          <label>
            <input type="password" placeholder="Password" />
          </label>

          <button>login to your account</button>
        </form>
      </div>

      <p>
        Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginRoute;

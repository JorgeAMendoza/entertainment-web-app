import entertainmentLogoIcon from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const SignUpRoute = () => {
  return (
    <main>
      <div>
        <img src={entertainmentLogoIcon} alt="entertainment logo" />
      </div>

      <div>
        <h1>Sign Up</h1>
        <form>
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
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpRoute;

import entertainmentLogoIcon from '../../assets/logo.svg';

const LoginRoute = () => {
  return (
    <main>
      <div>
        <img src={entertainmentLogoIcon} alt="entertainment logo" />
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
        Don&apos;t have an account? <a href="./"> Sign up</a>
      </p>
    </main>
  );
};

export default LoginRoute;

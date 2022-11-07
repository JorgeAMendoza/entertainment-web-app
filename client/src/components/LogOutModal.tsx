import { Link } from 'react-router-dom';

const LogOutModal = () => {
  return (
    <div>
      <h3>You are not signed in</h3>
      <p>Please follow the link below to sign in</p>
      <div>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default LogOutModal;

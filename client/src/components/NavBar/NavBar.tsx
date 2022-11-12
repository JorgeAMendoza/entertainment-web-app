import entertainmentLogo from '../../assets/logo.svg';
import closeMenuIcon from '../../assets/icon-close-menu.svg';
import logoutIcon from '../../assets/icon-logout.svg';
import gearIcon from '../../assets/icon-gear.svg';
import userProfilePic from '../../assets/user-icon.jpg';
import IconNavBookMark from '../icons/IconNavBoomark';
import IconNavHome from '../icons/IconNavHome';
import IconNavMovie from '../icons/IconNavMovie';
import IconNavShow from '../icons/IconNavShow';
import { useLoginContext } from '../../context/login-context';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { setToken } = useLoginContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem('ent-token');
    navigate('/login', {
      state: { logoutMessage: 'You have been succesfully signed out' },
    });
  };

  return (
    <nav>
      <div>
        <img src={entertainmentLogo} alt="entertainment logo" />
      </div>

      <ul>
        <li>
          <Link to="/dashboard">
            <IconNavHome />
          </Link>
        </li>
        <li>
          <Link to="movies">
            <IconNavMovie />
          </Link>
        </li>
        <li>
          <Link to="shows">
            <IconNavShow />
          </Link>
        </li>
        <li>
          <Link to="my-stuff">
            <IconNavBookMark />
          </Link>
        </li>
      </ul>

      {/* Give own styled compoent.  */}
      <div>
        <button aria-label="click to open account menu">
          <div>
            <img
              src={userProfilePic}
              alt="user profile picture"
              style={{ width: '100px' }}
            />
          </div>
        </button>
        <div aria-label="account sub menu">
          <div>
            <button aria-label="close sub menu">
              <img src={closeMenuIcon} alt="close menu icon" />
            </button>
          </div>
          <ul>
            <li>
              <button onClick={logoutUser}>
                <img src={logoutIcon} alt="logout icon" /> <span>Logout</span>
              </button>
            </li>
            <li>
              <button>
                <img src={gearIcon} alt="settings icon" /> <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

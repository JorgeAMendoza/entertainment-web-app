import { useState } from 'react';
import entertainmentLogo from '../../assets/logo.svg';
import userProfilePic from '../../assets/user-icon.jpg';
import IconNavBookMark from '../icons/IconNavBoomark';
import IconNavHome from '../icons/IconNavHome';
import IconNavMovie from '../icons/IconNavMovie';
import IconNavShow from '../icons/IconNavShow';
import { Link } from 'react-router-dom';
import AccountMenu from './AccountMenu/AccountMenu';

const NavBar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  return (
    <nav>
      <div>
        <img src={entertainmentLogo} alt="entertainment logo" />
      </div>

      <ul>
        <li>
          <Link to="/dashboard" data-cy="homepageTab">
            <IconNavHome />
          </Link>
        </li>
        <li>
          <Link to="movies" data-cy="movieTab">
            <IconNavMovie />
          </Link>
        </li>
        <li>
          <Link to="shows" data-cy="showTab">
            <IconNavShow />
          </Link>
        </li>
        <li>
          <Link to="my-stuff" data-cy="bookmarkedTab">
            <IconNavBookMark />
          </Link>
        </li>
      </ul>

      <div>
        <button
          aria-label="click to open account menu"
          data-cy="userProfile"
          onClick={() => setShowAccountMenu(true)}
        >
          <div>
            <img
              src={userProfilePic}
              alt="user profile picture"
              style={{ width: '50px' }}
            />
          </div>
          {showAccountMenu && (
            <AccountMenu setShowAccountMenu={setShowAccountMenu} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

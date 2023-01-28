import { useState } from 'react';
import entertainmentLogo from '../../assets/logo.svg';
import userProfilePic from '../../assets/user-icon.jpg';
import IconNavBookMark from '../icons/IconNavBoomark';
import IconNavHome from '../icons/IconNavHome';
import IconNavMovie from '../icons/IconNavMovie';
import IconNavShow from '../icons/IconNavShow';
import { Link, useLocation } from 'react-router-dom';
import AccountMenu from './AccountMenu/AccountMenu';
import Styled from './NavBar.styled';

const NavBar = () => {
  const { pathname } = useLocation();

  const [showAccountMenu, setShowAccountMenu] = useState(false);
  return (
    <Styled.NavBar>
      <Styled.NavIcon>
        <img src={entertainmentLogo} alt="entertainment logo" />
      </Styled.NavIcon>

      <Styled.NavLinks>
        <Styled.NavLink isActive={pathname === '/dashboard' ? true : false}>
          <Link to="/dashboard" data-cy="homepageTab">
            <IconNavHome />
          </Link>
        </Styled.NavLink>
        <Styled.NavLink isActive={pathname.includes('movies') ? true : false}>
          <Link to="movies" data-cy="movieTab">
            <IconNavMovie />
          </Link>
        </Styled.NavLink>
        <Styled.NavLink isActive={pathname.includes('shows') ? true : false}>
          <Link to="shows" data-cy="showTab">
            <IconNavShow />
          </Link>
        </Styled.NavLink>
        <Styled.NavLink isActive={pathname.includes('my-stuff') ? true : false}>
          <Link to="my-stuff" data-cy="bookmarkedTab">
            <IconNavBookMark />
          </Link>
        </Styled.NavLink>
      </Styled.NavLinks>

      <Styled.Profile>
        <Styled.ProfileButton
          aria-label="click to open account menu"
          data-cy="userProfile"
          onClick={() => setShowAccountMenu(true)}
        >
          <div>
            <img src={userProfilePic} alt="user profile picture" />
          </div>
        </Styled.ProfileButton>
        {showAccountMenu && (
          <AccountMenu setShowAccountMenu={setShowAccountMenu} />
        )}
      </Styled.Profile>
    </Styled.NavBar>
  );
};

export default NavBar;

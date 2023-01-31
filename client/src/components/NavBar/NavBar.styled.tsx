import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

interface NavLinkProps {
  isActive: boolean;
}

const NavBar = styled.nav`
  --background: var(--semi-dark-blue);
  background-color: var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1.5rem;

  @media screen and ${device.tablet} {
    width: 94%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 2.1rem 2.4rem;
  }
`;

const NavIcon = styled.div`
  img {
    width: 2.5rem;
  }

  @media screen and ${device.tablet} {
    img {
      width: 3.3rem;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.3rem;

  @media screen and ${device.tablet} {
    gap: 3.2rem;
  }
`;

const NavLink = styled.li<NavLinkProps>`
  --icon-color: var(--greyish-blue);
  --icon-color-active: var(--white);
  --icon-color-hover: var(--white);
  width: 1.7rem;
  height: 1.7rem;

  a {
    display: inline-block;
    width: 100%;
    svg {
      width: 100%;
      height: 100%;
      color: ${({ isActive }) =>
        isActive ? 'var(--icon-color-active)' : 'var(--icon-color)'};
    }

    &:hover {
      svg {
        color: var(--icon-color-hover);
      }
    }
  }

  @media screen and ${device.tablet} {
    width: 2rem;
    height: 2rem;
  }
`;

const Profile = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: none;
  outline: 1px solid white;
  display: block;

  img {
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
  }

  @media screen and ${device.tablet} {
    width: 3.2rem;
    height: 3.2rem;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

export default { NavBar, NavIcon, NavLinks, NavLink, Profile, ProfileButton };

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
  padding: 1.6rem 1.5rem;
  z-index: 2;

  @media screen and (${device.tablet}) {
    width: 93.5%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 2.1rem 2.4rem;
  }

  @media screen and (${device.laptop}) {
    width: 100%;
    flex-direction: column;
    min-height: min(95vh, 96rem);
    justify-content: flex-start;
    gap: 7.6rem;
    padding: 3.4rem 2.9rem;
    border-radius: 2rem;

    position: fixed;
    left: 3.1rem;
    top: 3.2rem;
    width: 9.6rem;
  }
`;

const NavIcon = styled.div`
  img {
    width: 2.5rem;
  }

  @media screen and (${device.tablet}) {
    img {
      width: 3.3rem;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.3rem;

  @media screen and (${device.tablet}) {
    gap: 3.2rem;
  }

  @media screen and (${device.laptop}) {
    flex-direction: column;
    margin-bottom: auto;
    gap: 3.9rem;
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

  @media screen and (${device.tablet}) {
    width: 2rem;
    height: 2rem;
  }
`;

const Profile = styled.div`
  position: relative;
  z-index: 2;
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

  @media screen and (${device.tablet}) {
    width: 3.2rem;
    height: 3.2rem;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  @media screen and (${device.laptop}) {
    margin-top: auto;
    align-self: flex-end;
    justify-self: flex-end;

    width: 4rem;
    height: 4rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export default { NavBar, NavIcon, NavLinks, NavLink, Profile, ProfileButton };

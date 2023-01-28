import styled from 'styled-components';

const NavBar = styled.nav`
  --background: var(--semi-dark-blue);
  background-color: var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1.5rem;
`;

const NavIcon = styled.div`
  img {
    width: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  --icon-color: var(--greyish-blue);
  --icon-color-active: var(--white);
  --icon-color-hover: var(--white);
  display: flex;
  align-items: center;
  gap: 2.3rem;

  li {
    width: 1.7rem;
    height: 1.7rem;
  }

  a {
    display: inline-block;
    width: 100%;
    svg {
      width: 100%;
      height: 100%;
      color: var(--icon-color);
    }

    &:hover {
      svg {
        color: var(--icon-color-hover);
      }
    }
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

  img {
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export default { NavBar, NavIcon, NavLinks, Profile, ProfileButton };

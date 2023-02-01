import { useLoginContext } from '../../../context/login-context';
import { useNavigate } from 'react-router-dom';
import closeMenuIcon from '../../../assets/icon-close-menu.svg';
import logoutIcon from '../../../assets/icon-logout.svg';
import { useEffect, useRef } from 'react';
import Styled from './AccountMenu.styled';

interface AccountMenuProps {
  setShowAccountMenu: React.Dispatch<boolean>;
}

const AccountMenu = ({ setShowAccountMenu }: AccountMenuProps) => {
  const { setToken } = useLoginContext();
  const navigate = useNavigate();
  const accountMenu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        accountMenu.current &&
        !accountMenu.current.contains(event.target as HTMLElement)
      ) {
        setShowAccountMenu(false);
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem('ent-token');
    navigate('/login', {
      state: { logoutMessage: 'You have been succesfully signed out' },
    });
  };
  return (
    <Styled.AccountMenu aria-label="account sub menu" ref={accountMenu}>
      <ul>
        <li>
          <Styled.MenuButton onClick={logoutUser} data-cy="logoutButton">
            <img src={logoutIcon} alt="logout icon" /> <span>Logout</span>
          </Styled.MenuButton>
        </li>
        <li>
          <Styled.MenuButton
            aria-label="close sub menu"
            onClick={() => setShowAccountMenu(false)}
          >
            <img src={closeMenuIcon} alt="close menu icon" />
            <span>Close</span>
          </Styled.MenuButton>
        </li>
      </ul>
    </Styled.AccountMenu>
  );
};

export default AccountMenu;

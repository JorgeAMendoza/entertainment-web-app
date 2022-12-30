import { useLoginContext } from '../../../context/login-context';
import { useNavigate } from 'react-router-dom';
import closeMenuIcon from '../../../assets/icon-close-menu.svg';
import logoutIcon from '../../../assets/icon-logout.svg';
import gearIcon from '../../../assets/icon-gear.svg';
import { useEffect, useRef } from 'react';

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
    <div
      style={{ border: '1px solid black' }}
      aria-label="account sub menu"
      ref={accountMenu}
    >
      <div>
        <button
          aria-label="close sub menu"
          onClick={() => setShowAccountMenu(false)}
        >
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
  );
};

export default AccountMenu;

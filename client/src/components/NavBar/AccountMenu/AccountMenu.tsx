import { useLoginContext } from '../../../context/login-context';
import { useNavigate } from 'react-router-dom';
import closeMenuIcon from '../../../assets/icon-close-menu.svg';
import logoutIcon from '../../../assets/icon-logout.svg';
import gearIcon from '../../../assets/icon-gear.svg';

interface AccountMenuProps {
  setShowAccountMenu: React.Dispatch<boolean>;
}

const AccountMenu = ({ setShowAccountMenu }: AccountMenuProps) => {
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
    <div aria-label="account sub menu">
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

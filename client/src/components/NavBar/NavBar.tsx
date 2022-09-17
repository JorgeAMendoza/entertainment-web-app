import entertainmentLogo from '../../assets/logo.svg';
import closeMenuIcon from '../../assets/icon-close-menu.svg';
import IconNavBookMark from '../icons/IconNavBoomark';
import IconNavHome from '../icons/IconNavHome';
import IconNavMovie from '../icons/IconNavMovie';
import IconNavShow from '../icons/IconNavShow';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={entertainmentLogo} alt="entertainment logo" />
      </div>

      <ul>
        <li>
          <a>
            <IconNavHome />
          </a>
        </li>
        <li>
          <a>
            <IconNavMovie />
          </a>
        </li>
        <li>
          <a>
            <IconNavShow />
          </a>
        </li>
        <li>
          <a>
            <IconNavBookMark />
          </a>
        </li>
      </ul>

      <button aria-label="click to open the account menu">
        <div data-show="hide">
          <button aria-label="click to close the account menu">
            <img src={closeMenuIcon} alt="close menu icon" />
          </button>
          <ul>
            <li>logout</li>
          </ul>
        </div>
      </button>
    </nav>
  );
};

export default NavBar;

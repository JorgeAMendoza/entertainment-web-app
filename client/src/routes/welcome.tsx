import logoIcon from '../assets/logo.svg';
import movieIcon from '../assets/icon-category-movie.svg';
import tvIcon from '../assets/icon-category-tv.svg';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <header>
        <div>
          <img src={logoIcon} alt="Entertainment app logo" />
        </div>

        <Link to="/login">Sign In</Link>
      </header>

      <main>
        <section>
          <h1>the best entertainment</h1>
          <div>
            <div>
              <img src={movieIcon} alt="Movie icon" />
            </div>
            <div>
              <img src={tvIcon} alt="Show icon" />
            </div>
          </div>

          <p>All in one place</p>

          <p>
            Get endless entertainment, shows, and movies you love.
            <br />
            All for one price.
          </p>

          <Link to="/sign-up" data-cy="toSignUpPage">
            Sign up
          </Link>
        </section>

        <section>
          <h2>No premiums, no extra charges, just one plan</h2>
          <div>
            <h3>Beyond Earth</h3>
            <p>
              Movie <img src={movieIcon} />
            </p>
          </div>
          <div>
            <h3>1998</h3>
            <p>
              Movie <img src={movieIcon} />
            </p>
          </div>
          <div>
            <h3>No Land beyond</h3>
            <p>
              Movie <img src={movieIcon} />
            </p>
          </div>
          <div>
            <h3>Undiscovered Cities</h3>
            <p>
              TV <img src={tvIcon} />
            </p>
          </div>
          <div>
            <h3>During the hunt</h3>
            <p>
              TV <img src={tvIcon} />
            </p>
          </div>
          <div>
            <h3>Below Echo</h3>
            <p>
              TV <img src={tvIcon} />
            </p>
          </div>
        </section>
      </main>

      <div>
        <p>Created by Jorge A. Mendoza</p>
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X/hub/entertainment-web-app-Hyt48xvNq"
            target="_blank"
            rel="noreferrer"
          >
            Front End Masters
          </a>
        </p>
        <p>
          <a
            href="https://github.com/JorgeAMendoza/entertainment-web-app"
            target="_blank"
            rel="noreferrer"
          >
            Project Repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;

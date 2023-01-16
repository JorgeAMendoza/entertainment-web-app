import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo.svg';
import movieIcon from '../../assets/icon-category-movie.svg';
import tvIcon from '../../assets/icon-category-tv.svg';
import playIcon from '../../assets/icon-play-grey.svg';
import Styled from './WelcomePage.styled';
import { ButtonLink } from '../../styles/Button.styled';
import Container from '../../styles/utils/Container.styled';

const WelcomePage = () => {
  return (
    <Styled.WelcomePage>
      <Container>
        <Styled.Header>
          <Link to="/welcome">
            <Styled.Logo>
              <img src={logoIcon} alt="Entertainment app logo" />
            </Styled.Logo>
          </Link>

          <ButtonLink to="/login">Sign In</ButtonLink>
        </Styled.Header>
      </Container>

      <main>
        <Styled.HomeBanner>
          <Styled.HomeBannerContent>
            <h1>the best entertainment</h1>
            <Styled.HomeBannerIcons>
              <div>
                <img src={movieIcon} alt="Movie icon" />
              </div>
              <div>
                <img src={tvIcon} alt="Show icon" />
              </div>
            </Styled.HomeBannerIcons>

            <p>
              Get endless the entertainment, shows, and movies you love. All for
              one price.
            </p>

            <Styled.SignUpLink to="/sign-up" data-cy="toSignUpPage">
              Sign up
            </Styled.SignUpLink>
          </Styled.HomeBannerContent>
        </Styled.HomeBanner>

        <Container>
          <Styled.HomeInformation>
            <Styled.HomeInformationText>
              <h2>No premiums, no extra charges, just one plan</h2>
              <Styled.HomeInfoIcons>
                <div>
                  <img src={tvIcon} alt="" />
                </div>
                <div>
                  <img src={movieIcon} alt="" />
                </div>
                <div>
                  <img src={playIcon} alt="" />
                </div>
              </Styled.HomeInfoIcons>
              <p>
                Sign up and get access to every piece of content on our service.
                No extra charges, no ads, just you and the entertainment you
                love.
              </p>
            </Styled.HomeInformationText>

            <Styled.HomeInformationContent>
              <Styled.ContentCard>
                <h3>Beyond Earth</h3>
                <p>
                  Movie{' '}
                  <span>
                    <img src={movieIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
              <Styled.ContentCard>
                <h3>1998</h3>
                <p>
                  Movie{' '}
                  <span>
                    <img src={movieIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
              <Styled.ContentCard>
                <h3>No Land beyond</h3>
                <p>
                  Movie{' '}
                  <span>
                    <img src={movieIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
              <Styled.ContentCard>
                <h3>Undiscovered Cities</h3>
                <p>
                  TV{' '}
                  <span>
                    <img src={tvIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
              <Styled.ContentCard>
                <h3>During the hunt</h3>
                <p>
                  TV{' '}
                  <span>
                    <img src={tvIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
              <Styled.ContentCard>
                <h3>Below Echo</h3>
                <p>
                  TV{' '}
                  <span>
                    <img src={tvIcon} />
                  </span>
                </p>
              </Styled.ContentCard>
            </Styled.HomeInformationContent>
          </Styled.HomeInformation>
        </Container>
      </main>

      <Styled.FooterInfo>
        <p>Created by Jorge A. Mendoza</p>
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X"
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
      </Styled.FooterInfo>
    </Styled.WelcomePage>
  );
};

export default WelcomePage;

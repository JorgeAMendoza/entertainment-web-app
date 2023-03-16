import styled from 'styled-components';
import bannerImage from '../../assets/banner.png';
import { ButtonLink } from '../../styles/Button.styled';
import device from '../../styles/utils/device-breakpoints';
import bgBeyondEarth from '../../assets/thumbnails/beyond-earth-bg.png';
import bg1998 from '../../assets/thumbnails/1998-bg.png';
import bgNoLand from '../../assets/thumbnails/no-land-beyond-bg.png';
import bgCities from '../../assets/thumbnails/undiscovered-cities-bg.png';
import bgHunt from '../../assets/thumbnails/the-hunt-bg.png';
import bgEcho from '../../assets/thumbnails/below-echo-bg.png';

const WelcomePage = styled.div`
  & > *:not(:last-child) {
    margin-block-end: 2rem;
  }
  padding: 2rem 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 5rem;
  }
`;

const HomeBanner = styled.section`
  position: relative;
  background: url(${bannerImage}) no-repeat center / cover;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block-end: 2rem;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  @media screen and ${device.laptop} {
    min-height: 50vh;
  }
`;

const HomeBannerContent = styled.div`
  z-index: 2;
  text-align: center;
  font-weight: 300;
  width: 80%;
  h1 {
    text-transform: capitalize;
    font-weight: 300;
  }

  & > *:not(:last-child) {
    margin-block-end: 1.5rem;
  }

  @media screen and ${device.tablet} {
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const HomeBannerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > div > img {
    width: 3rem;
  }
`;

const HomeInformation = styled.section`
  text-align: center;
  h2 {
    font-size: 2.4rem;
    font-weight: 300;
  }

  p {
    font-weight: 300;
  }

  & > *:not(:last-child) {
    margin-block-end: 3rem;
  }
`;

const HomeInformationText = styled.div`
  & > *:not(:last-child) {
    margin-block-end: 1.5rem;

    @media screen and ${device.tablet} {
      margin-block-end: 0;
    }
  }

  @media screen and ${device.tablet} {
    text-align: left;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-areas:
      'head icons'
      'text icons';

    h2 {
      padding-bottom: 1rem;
    }
  }
`;

const HomeInfoIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  grid-area: icons;

  img {
    width: 3rem;
  }

  @media screen and ${device.tablet} {
    align-items: center;
    justify-content: end;
    gap: 3rem;
    img {
      width: 4rem;
    }
  }
`;

const HomeInformationContent = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 16rem;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min(40vw, 48rem);
    justify-content: space-between;
    gap: 2rem;
  }
`;

const FooterInfo = styled.div`
  text-align: center;
`;

const SignUpLink = styled(ButtonLink)`
  width: 15ch;
  display: inline-block;
`;

const ContentCard = styled.figure`
  position: relative;
  padding: 0.5rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and ${device.laptop} {
    h3 {
      font-size: 3.2rem;
    }
    p {
      font-size: 2.4rem;
      gap: 1rem;
    }
    img {
      width: 2rem;
    }
  }

  &:nth-of-type(1) {
    background: url(${bgBeyondEarth}) no-repeat center center/cover;
  }
  &:nth-of-type(2) {
    background: url(${bg1998}) no-repeat center/cover;
  }
  &:nth-of-type(3) {
    background: url(${bgNoLand}) no-repeat center/cover;
  }
  &:nth-of-type(4) {
    background: url(${bgCities}) no-repeat center/cover;
  }
  &:nth-of-type(5) {
    background: url(${bgHunt}) no-repeat center/cover;
  }
  &:nth-of-type(6) {
    background: url(${bgEcho}) no-repeat center/cover;
  }
`;

export default {
  WelcomePage,
  Header,
  Logo,
  HomeBanner,
  HomeBannerContent,
  HomeBannerIcons,
  HomeInformation,
  HomeInformationText,
  HomeInformationContent,
  HomeInfoIcons,
  FooterInfo,
  SignUpLink,
  ContentCard,
};

import styled from 'styled-components';
import bannerImage from '../../assets/banner.png';
import { ButtonLink } from '../../styles/Button.styled';
import bgSmallBeyondEarth from '../../assets/thumbnails/beyond-earth-bg-sm.png';
import bgSmall1998 from '../../assets/thumbnails/1998-bg-sm.png';
import bgSmallNoLand from '../../assets/thumbnails/no-land-beyond-bg-sm.png';
import bgSmallCities from '../../assets/thumbnails/undiscovered-cities-bg-sm.png';
import bgSmallHunt from '../../assets/thumbnails/the-hunt-bg-sm.png';
import bgSmallEcho from '../../assets/thumbnails/below-echo-bg-sm.png';

const WelcomePage = styled.div`
  & > *:not(:last-child) {
    margin-block-end: 2rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

const Logo = styled.div`
  width: 10rem;
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
    margin-block-end: 1.5rem;
  }
`;

const HomeInformationText = styled.div`
  p {
    font-weight: 300;
  }

  & > div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;

    img {
      width: 3rem;
    }
  }
`;

const HomeInfoIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 3rem;
  }
`;

const HomeInformationContent = styled.div`
  text-align: left;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 16rem;
  gap: 1rem;
  margin-bottom: 2rem;
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

  p span {
    display: inline-block;
    margin-left: 0.5rem;
  }

  &:nth-of-type(1) {
    background: url(${bgSmallBeyondEarth}) no-repeat center/cover;
  }
  &:nth-of-type(2) {
    background: url(${bgSmall1998}) no-repeat center/cover;
  }
  &:nth-of-type(3) {
    background: url(${bgSmallNoLand}) no-repeat center/cover;
  }
  &:nth-of-type(4) {
    background: url(${bgSmallCities}) no-repeat center/cover;
  }
  &:nth-of-type(5) {
    background: url(${bgSmallHunt}) no-repeat center/cover;
  }
  &:nth-of-type(6) {
    background: url(${bgSmallEcho}) no-repeat center/cover;
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

import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const TrendingSection = styled.section`
  overflow: scroll;
  direction: ltr;
  padding: 0 1.7rem;
  padding-top: 0.7rem;
  margin-bottom: -1rem;
  position: relative;

  h2 {
    font-weight: 300;
  }

  @media screen and ${device.tablet} {
    padding: 0.6rem 2.5rem;
  }

  @media screen and ${device.laptop} {
    padding-left: 0;
  }
`;

const TrendingTitle = styled.h2`
  font-weight: 300;
  width: 92%;
  margin: 0 auto;
  font-size: 2rem;
  margin-bottom: -1.9rem;
  letter-spacing: -0.3px;

  @media screen and ${device.tablet} {
    font-size: 3.2rem;
    padding: 0;
    padding-top: 1.1rem;
  }

  @media screen and ${device.laptop} {
    padding-left: 0;
    width: 100%;
  }
`;

const TrendingItems = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  height: 15rem;

  @media screen and ${device.tablet} {
    margin-block-start: 1.5rem;
    gap: 4rem;
  }
`;

export default {
  TrendingSection,
  TrendingItems,
  TrendingTitle,
};

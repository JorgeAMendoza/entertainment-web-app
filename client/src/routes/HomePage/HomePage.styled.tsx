import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const TrendingSection = styled.section`
  overflow: scroll;
  direction: ltr;
  padding: 0.5rem 1.7rem;

  h2 {
    font-weight: 300;
  }

  @media screen and ${device.tablet} {
    padding: 0.6rem 2.5rem;
  }
`;

const TrendingTitle = styled.h2`
  font-weight: 300;
  width: 93%;
  margin: 0 auto;
  font-size: 2rem;

  @media screen and ${device.tablet} {
    font-size: 3.2rem;
  }
`;

const TrendingItems = styled.div`
  margin-block-start: 2.6rem;
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

export default {
  TrendingSection,
  TrendingItems,
  TrendingTitle,
};

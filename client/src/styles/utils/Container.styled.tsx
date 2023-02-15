import styled from 'styled-components';
import device from './device-breakpoints';

const Container = styled.div`
  width: 93%;
  max-width: 126rem;
  margin: 0 auto;
`;

export const RouteContainer = styled.main`
  padding-top: 2.4rem;
  width: 100%;

  & > * {
    margin-block-end: 1.9rem;
  }

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
  }
`;

export const PageContainer = styled.main`
  padding-top: 2.4rem;
  width: 100%;

  & > * {
    margin-block-end: 2.2rem;
  }

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
  }
`;

export default Container;

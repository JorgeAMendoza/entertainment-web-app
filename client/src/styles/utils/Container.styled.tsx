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
  display: grid;
  gap: 2.4rem;

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
    gap: 3.1rem;
  }
`;

export const PageContainer = styled.main`
  padding-top: 2.4rem;
  width: 100%;
  display: grid;
  gap: 3.2rem;

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
  }
`;

export default Container;

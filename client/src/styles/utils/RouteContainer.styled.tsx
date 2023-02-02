import styled from 'styled-components';
import device from './device-breakpoints';

const RouteContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-top: 2.4rem;

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
  }
`;

export default RouteContainer;

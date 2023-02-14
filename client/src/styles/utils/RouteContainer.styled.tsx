import styled from 'styled-components';
import device from './device-breakpoints';

const RouteContainer = styled.main`
  padding-top: 2.4rem;
  width: 100%;

  & > * {
    margin-block-end: 1.9rem;
  }

  @media screen and ${device.tablet} {
    padding-top: 3.1rem;
  }
`;

export default RouteContainer;

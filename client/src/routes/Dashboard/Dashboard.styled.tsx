import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const Dashboard = styled.div`
  @media screen and ${device.tablet} {
    padding: 2.2rem 0;
  }
`;

export default { Dashboard };

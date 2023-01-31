import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const Dashboard = styled.div`
  @media screen and ${device.tablet} {
    padding: 2.2rem 0;
  }

  @media screen and ${device.laptop} {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-left: 3.1rem;
    padding: 3.1rem 0;
  }
`;

export default { Dashboard };

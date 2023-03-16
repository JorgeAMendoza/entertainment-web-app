import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const Dashboard = styled.div`
  position: relative;
  @media screen and ${device.tablet} {
    padding: 2.2rem 0;


  @media screen and ${device.laptop} {
    margin-left: 3.1rem;
    padding: 3.2rem 0;
    padding-bottom: 0;
    padding-left: 13.4rem;
  }
`;

export default { Dashboard };

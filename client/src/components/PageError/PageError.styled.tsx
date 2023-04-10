import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const PageError = styled.section`
  width: 93%;
  margin: 0 auto;

  @media screen and ${device.laptop} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
`;

const Text = styled.p`
  font-weight: 300;
`;

export default { PageError, Title, Text };

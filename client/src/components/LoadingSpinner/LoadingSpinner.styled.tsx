import styled, { keyframes } from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  animation: ${rotate} 1.5s linear infinite;
  width: 5rem;
  height: 5rem;
  border: 5px solid white;
  border-radius: 50%;
  border-bottom: 5px solid var(--red);
  margin-bottom: 1rem;

  @media screen and ${device.tablet} {
    width: 8rem;
    height: 8rem;
  }
`;

const Text = styled.p`
  font-weight: 300;

  @media screen and ${device.tablet} {
    font-weight: 2rem;
  }
`;

export default { LoadingSpinner, Spinner, Text };

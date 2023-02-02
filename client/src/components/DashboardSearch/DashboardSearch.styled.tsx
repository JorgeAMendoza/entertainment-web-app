import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const DashboardSearch = styled.label`
  display: flex;

  span img {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media screen and ${device.tablet} {
    span img {
      width: 3.4rem;
      height: 3.3rem;
    }
  }
`;

const Input = styled.input`
  --input-color: var(--white);
  background-color: transparent;
  color: var(--input-color);
  font-weight: 300;
  font-size: 1.6rem;
  width: 100%;
  margin-left: 1.8rem;

  @media screen and ${device.tablet} {
    font-size: 2.4rem;
    margin-left: 2.5rem;
  }
`;

export default {
  DashboardSearch,
  Input,
};

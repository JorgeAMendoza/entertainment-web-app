import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const DashboardSearch = styled.label`
  display: flex;
  width: 91%;
  margin: 0 auto;

  span img {
    width: 2.5rem;
    height: 2.4rem;
  }

  @media screen and ${device.tablet} {
    width: 93%;
    span img {
      width: 3.4rem;
      height: 3.3rem;
    }
  }

  @media screen and ${device.laptop} {
    width: 100%;
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

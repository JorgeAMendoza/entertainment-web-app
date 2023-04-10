import styled from 'styled-components';
import { Button } from '../../../styles/Button.styled';
import device from '../../../styles/utils/device-breakpoints';

const AccountMenu = styled.div`
  --background-color: var(--semi-dark-blue);
  --outline-color: var(--greyish-blue);
  position: absolute;
  background-color: var(--background-color);
  border-radius: 10px;
  outline: 1px solid var(--outline-color);
  top: 100%;
  left: -8rem;
  width: 10rem;
  padding: 0.5rem;
  z-index: 3;

  ul li:first-of-type {
    margin-bottom: 0.7rem;
  }

  @media screen and ${device.laptop} {
    top: -135%;
    left: 120%;
  }
`;

const MenuButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 0.8rem;

  img {
    width: 1.8rem;
    margin-right: 0.3rem;
  }

  @media screen and ${device.laptop} {
    font-size: 1.6rem;
    justify-content: flex-start;
    min-width: 8ch;
    img {
      width: 2.2rem;
    }
  }
`;

export default { AccountMenu, MenuButton };

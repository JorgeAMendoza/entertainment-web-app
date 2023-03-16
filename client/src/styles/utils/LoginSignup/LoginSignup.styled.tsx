import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../../Button.styled';

interface InputLabelProps {
  error: boolean;
}

const PageContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.9rem;
`;

const Logo = styled.div``;

const PasswordInfo = styled.div`
  --background: var(--dark-blue);
  background-color: var(--background);
  width: 80%;
  top: 100%;
  left: 0;
  font-size: 1.3rem;
  position: absolute;
  font-weight: 300;
  padding: 1em 0.6rem;
  display: none;

  ul {
    list-style: inside;
  }

  li {
    margin-left: 1rem;
  }
`;

const PasswordLabel = styled.div`
  position: relative;
  z-index: 2;

  &:focus-within {
    ${PasswordInfo} {
      display: block;
    }
  }
`;

const AuthForm = styled(Form)`
  --container-bg: var(--semi-dark-blue);
  background-color: var(--semi-dark-blue);
  width: 100%;
  border-radius: 1rem;
  padding: 2.4rem 2.3rem;
  padding-bottom: 1rem;
  margin-block-start: 5.5rem;
  position: relative;
  max-width: 40rem;

  h1 {
    font-weight: 300;
    font-size: 3.2rem;
  }

  & > * {
    margin-block-end: 2rem;
  }
`;

const InputLabel = styled.label<InputLabelProps>`
  --outline-color: var(--greyish-blue);
  --outline-focus-color: var(--white);
  --outline-error-color: var(--red);
  width: 100%;
  display: flex;
  border-bottom: 1px solid
    ${({ error }) =>
      error ? 'var(--outline-error-color)' : 'var(--outline-color)'};
  margin-block-end: 0.7rem;
  position: relative;
  background: transparent;

  &:focus-within {
    border-bottom: 1px solid var(--outline-focus-color);
  }

  input {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    font-weight: 300;
    width: 100%;
    padding: 1.6rem 1.7rem;
    color: var(--white);
    outline: none;
    z-index: -1;

    &::placeholder {
      color: var(--white);
      opacity: 0.5;
    }
  }

  p {
    color: var(--red);
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    width: 40%;
  }
`;

const ActionButton = styled(Button)`
  width: 100%;
  font-weight: 300;
  font-size: 1.5rem;
  border-radius: 0.6rem;
  padding: 1.3rem;
  margin-top: 1.9rem;
`;

const SignUpText = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  font-style: normal;
  margin-top: 0.4rem;

  span {
    margin-left: 0.5rem;

    & > * {
      color: var(--red);
      text-decoration: none;
    }
  }
`;

const AuthError = styled.p`
  --text-color: var(--red);
  color: var(--text-color);
  font-weight: 300;
  text-transform: capitalize;
  margin-top: 1rem;
`;

const LogoutMessage = styled.p`
  font-weight: 300;
  margin-top: 1rem;
`;

export default {
  PageContainer,
  AuthForm,
  Logo,
  InputLabel,
  ActionButton,
  SignUpText,
  AuthError,
  LogoutMessage,
  PasswordInfo,
  PasswordLabel,
};

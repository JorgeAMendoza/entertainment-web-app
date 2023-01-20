import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../../Button.styled';

const PageContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.9rem;
`;

const Logo = styled.div``;

const AuthForm = styled(Form)`
  --container-bg: var(--semi-dark-blue);
  background-color: var(--semi-dark-blue);
  width: 100%;
  border-radius: 1rem;
  padding: 2.4rem 2.3rem;
  padding-bottom: 1rem;
  margin-block-start: 5.5rem;

  h1 {
    font-weight: 300;
    font-size: 3.2rem;
  }

  & > * {
    margin-block-end: 2rem;
  }
`;

const InputLabel = styled.label`
  --outline-color: var(--greyish-blue);
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--outline-color);
  margin-block-end: 0.7rem;

  input {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    font-weight: 300;
    width: 70%;
    padding: 1.6rem 1.7rem;
    color: var(--white);

    &::placeholder {
      color: var(--white);
      opacity: 0.5;
    }
  }

  p {
    color: var(--red);
    font-size: 1.2rem;
    border: 1px solid black;
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

export default {
  PageContainer,
  AuthForm,
  Logo,
  InputLabel,
  ActionButton,
  SignUpText,
};

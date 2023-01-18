import styled from 'styled-components';
import { Form } from 'formik';

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
  /* min-height: 38.5rem; */
  width: 100%;
  border-radius: 1rem;
  padding: 2.5rem;
  margin-block-start: 5.5rem;

  h1 {
    font-weight: 300;
  }

  & > * {
    border: 1px solid black;
    margin-block-end: 2rem;
  }
`;

export default {
  PageContainer,
  AuthForm,
  Logo,
};

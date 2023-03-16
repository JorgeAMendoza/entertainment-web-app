import { Link } from 'react-router-dom';
import Styled from './PageError.styled';

const PageError = () => {
  return (
    <Styled.PageError id="page-error">
      <Styled.Title>Something went wrong 😢</Styled.Title>
      <Styled.Text>
        An unexpected error has occured, please refresh the page or return to
        the <Link to="/login">login page</Link> and sign in again.
      </Styled.Text>
    </Styled.PageError>
  );
};

export default PageError;

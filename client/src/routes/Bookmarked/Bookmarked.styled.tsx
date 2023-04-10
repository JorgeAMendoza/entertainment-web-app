import styled from 'styled-components';

const NoContentMessage = styled.div`
  text-align: left;
  grid-column: span 2;

  p:first-of-type {
    font-size: 2rem;
    margin-block-end: 0.6rem;
  }

  p:last-of-type {
    font-weight: 300;
  }
`;

export default { NoContentMessage };

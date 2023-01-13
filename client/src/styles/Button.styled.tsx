import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: var(--red);
  min-width: 8ch;
  padding: 1rem 1rem;
`;

export const ButtonLink = styled(Link)`
  color: white;
  background-color: var(--red);
  min-width: 9ch;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  font-weight: 300;
`;

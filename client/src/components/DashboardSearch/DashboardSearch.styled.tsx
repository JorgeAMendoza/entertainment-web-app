import styled from 'styled-components';

const DashboardSearch = styled.label`
  display: flex;

  span img {
    width: 2.4rem;
    height: 2.4rem;
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
`;

export default {
  DashboardSearch,
  Input,
};

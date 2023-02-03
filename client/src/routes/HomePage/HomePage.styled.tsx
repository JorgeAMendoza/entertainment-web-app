import styled from 'styled-components';

const TrendingSection = styled.section`
  overflow: scroll;
  direction: ltr;
  padding: 0.5rem 2rem;

  h2 {
    font-weight: 300;
  }
`;

const TrendingItems = styled.div`
  margin-block-start: 1rem;
  display: flex;
  width: 100%;
  gap: 1.5rem;

  figure {
    min-width: 24rem;
    border: 1px solid black;
  }
`;

export default {
  TrendingSection,
  TrendingItems,
};

import styled from 'styled-components';

const TrendingSection = styled.section`
  overflow: scroll;
  direction: ltr;
  padding: 0.5rem 2rem;

  h2 {
    font-weight: 300;
  }
`;

const TrendingTitle = styled.h2`
  font-weight: 300;
  width: 93%;
  margin: 0 auto;
`;

const TrendingItems = styled.div`
  margin-block-start: 1rem;
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

export default {
  TrendingSection,
  TrendingItems,
  TrendingTitle,
};

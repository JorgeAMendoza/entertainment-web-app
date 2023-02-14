import styled from 'styled-components';

const ContentSection = styled.section`
  width: 92%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  text-align: center;
  gap: 1.5rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-block-end: 2rem;
`;

export default { ContentSection, Title, ContentContainer };

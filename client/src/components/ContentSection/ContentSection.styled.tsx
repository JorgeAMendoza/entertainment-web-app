import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const ContentSection = styled.section`
  width: 92%;
  margin: 0 auto;

  @media screen and ${device.tablet} {
    width: 93.5%;
  }

  @media screen and ${device.laptop} {
    width: 100%;
    padding-right: 3.4rem;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  gap: 1.5rem;

  @media screen and ${device.tablet} {
    grid-template-columns: repeat(3, minmax(22rem, 1fr));
    grid-auto-rows: max-content;
    gap: 2.5rem;
  }

  @media screen and ${device.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-auto-rows: max-content;
    gap: 3.3rem;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-block-end: 2rem;
  letter-spacing: -0.5px;

  @media screen and ${device.tablet} {
    font-size: 3.2rem;
    margin-block-end: 3rem;
  }
`;

export default { ContentSection, Title, ContentContainer };

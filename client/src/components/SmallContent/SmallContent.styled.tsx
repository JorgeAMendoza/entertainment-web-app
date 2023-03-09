import styled, { keyframes } from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const SmallContentFadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const SmallContent = styled.figure`
  transition: opacity 2s ease-in;
  animation: ${SmallContentFadeIn} 0.3s linear;
`;

const DummySmallContent = styled.div`
  min-height: 19.2rem;
`;

const PlayButton = styled.button`
  font-family: 'Outfit';
  display: none;
  background-color: rgba(151, 151, 151, 0.5);
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 24px;
  color: var(--white);
  font-weight: 500;
  min-width: 10ch;
  > div {
    margin-right: 1.3rem;
  }

  @media screen and ${device.tablet} {
    min-width: 12ch;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;

  img {
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover,
  &:focus {
    picture::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }

    ${PlayButton} {
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 8%;
  right: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 0;
  }
`;

const ContentContainer = styled.div`
  margin-block-start: 0.5rem;
  text-align: left;
`;

const ContentInfo = styled.div`
  display: flex;
  gap: 0.6rem;
  font-weight: 300;
  font-size: 1.1rem;
  margin-block-end: 0.3rem;
  opacity: 0.75;

  img {
    width: 1rem;
  }

  @media screen and ${device.tablet} {
    font-size: 1.3rem;
    gap: 0.9rem;
  }
`;

const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: medium;

  @media screen and ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export default {
  SmallContent,
  DummySmallContent,
  ImageContainer,
  PlayButton,
  BookmarkButton,
  ContentContainer,
  ContentInfo,
  ContentIcon,
  Title,
};

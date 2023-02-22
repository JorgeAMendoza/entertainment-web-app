import styled from 'styled-components';
import device from '../../styles/utils/device-breakpoints';

const LargeContent = styled.figure`
  position: relative;
  min-width: 24rem;
  height: 14rem;
  border-radius: 8px;

  @media screen and ${device.tablet} {
    min-width: 47rem;
    height: 23rem;
  }
`;

const ContentImage = styled.div`
  position: absolute;
  z-index: -1;
  img,
  picture {
    width: 24rem;
    height: 14rem;
    border-radius: 8px;
    display: block;
  }

  @media screen and ${device.tablet} {
    img,
    picture {
      width: 47rem;
      height: 23rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4) 80%
    );
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: 8px;
  }

  @media screen and ${device.tablet} {
    padding-right: 2.3rem;
    padding-top: 1.7rem;
  }
`;

const BookmarkButton = styled.button`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  order: 1;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.div`
  position: absolute;
  display: flex;
  width: fit-content;
  top: 0;
  left: 0;
  display: none;
`;

const ContentInfo = styled.div`
  align-self: flex-end;
  font-weight: 300;
  padding-left: 0.6rem;
  padding-bottom: 0.4rem;
  p {
    display: flex;
    font-size: 1.2rem;
    gap: 0.8rem;
    text-transform: capitalize;
    font-weight: light;

    &:nth-of-type(1) {
      margin-block-end: 0.3rem;
    }

    &:nth-of-type(2) {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media screen and ${device.tablet} {
    padding-left: 1.5rem;
    padding-bottom: 0.9rem;
    p {
      font-size: 1.5rem;

      &:nth-of-type(2) {
        font-size: 2.4rem;
      }
    }
  }
`;

export default {
  LargeContent,
  BookmarkButton,
  ContentImage,
  PlayButton,
  ContentInfo,
  ContentContainer,
};

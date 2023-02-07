import styled from 'styled-components';

const LargeContent = styled.figure`
  position: relative;
  min-width: 24rem;
  min-height: 14rem;
  border-radius: 8px;
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
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 100%;
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
`;

export default {
  LargeContent,
  BookmarkButton,
  ContentImage,
  PlayButton,
  ContentInfo,
  ContentContainer,
};

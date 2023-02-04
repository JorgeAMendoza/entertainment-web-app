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
  img {
    min-width: 100%;
    height: 100%;
    border-radius: 8px;
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
  p {
    display: flex;
    font-size: 1.5rem;
    gap: 1rem;
    text-transform: capitalize;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const ContentTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export default {
  LargeContent,
  BookmarkButton,
  ContentImage,
  PlayButton,
  ContentInfo,
  ContentTitle,
  ContentContainer,
};

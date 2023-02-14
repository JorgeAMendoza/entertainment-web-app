import styled from 'styled-components';

const SmallContent = styled.figure``;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;

  img {
    border-radius: 8px;
    object-fit: cover;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  display: none;
`;

const BookmarkButton = styled.button`
  cursor: pointer;
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
  margin-block-start: 0.8rem;
  text-align: left;
`;

const ContentInfo = styled.div`
  display: flex;
  gap: 0.6rem;
  font-weight: 300;
  font-size: 1.1rem;
  margin-block-end: 0.3rem;

  img {
    width: 1rem;
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
`;

export default {
  SmallContent,
  ImageContainer,
  PlayButton,
  BookmarkButton,
  ContentContainer,
  ContentInfo,
  ContentIcon,
  Title,
};

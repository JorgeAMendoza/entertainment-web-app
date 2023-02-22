import styled from 'styled-components';

const NoBookmarks = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 3rem;
  width: 93%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 3.2rem;
`;

const Message = styled.p`
  font-weight: 300;
`;

const BookmarkImage = styled.div`
  img {
    width: 5rem;
  }
`;

export default { NoBookmarks, BookmarkImage, Title, Message };

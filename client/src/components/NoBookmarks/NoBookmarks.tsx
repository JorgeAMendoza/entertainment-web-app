import bookmarkIcon from '../../assets/icon-bookmark-empty.svg';
import Styled from './NoBookMarks.styled';

const NoBookmarks = () => {
  return (
    <Styled.NoBookmarks>
      <div>
        <Styled.Title>No bookmarks found</Styled.Title>
        <Styled.Message>
          Click the bookmark buttons on a movie/tv show to save it and find it
          here later!
        </Styled.Message>
      </div>

      <Styled.BookmarkImage>
        <img src={bookmarkIcon} alt="bookmark icon" />
      </Styled.BookmarkImage>
    </Styled.NoBookmarks>
  );
};

export default NoBookmarks;

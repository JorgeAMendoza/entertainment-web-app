import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../../assets/icon-bookmark-full.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';
import useBookmarkMutation from '../../hooks/bookmarkMutation';
import useUnbookmarkMutation from '../../hooks/unbookmarkMutation';
import Styled from './LargeContent.styled';
import { memo } from 'react';
import { HOST } from '../../utils/config';

interface LargeContentProps {
  id: string;
  title: string;
  year: number;
  type: string;
  rating: string;
  images: {
    small: string;
    medium: string;
    large: string;
  };
  bookmarked: boolean;
}

const LargeContent = ({
  id,
  title,
  year,
  type,
  rating,
  bookmarked,
  images,
}: LargeContentProps) => {
  const { bookmarkContent } = useBookmarkMutation();
  const { unbookmarkContent } = useUnbookmarkMutation();

  const bookmark = () => {
    if (!bookmarked)
      void bookmarkContent({ variables: { contentId: id, contentType: type } });
    else
      void unbookmarkContent({
        variables: { contentId: id, contentType: type },
      });
  };

  return (
    <Styled.LargeContent>
      <Styled.ContentImage>
        <picture>
          <source srcSet={`${HOST}${images.large}`} media="(min-width:768px)" />
          <img
            src={`${HOST}${images.small}`}
            alt={`content image for ${title}`}
          />
        </picture>
      </Styled.ContentImage>
      <Styled.ContentContainer>
        <Styled.BookmarkButton
          onClick={bookmark}
          aria-label={
            bookmarked
              ? `click to bookmark ${title}`
              : `click to un-bookmark ${title}`
          }
        >
          <img
            src={bookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark content icon"
          />
        </Styled.BookmarkButton>
        <Styled.PlayButton>
          <span aria-label={`click the button to play ${title}`}>
            <img src={playIcon} alt="play button icon" />
          </span>
          Play
        </Styled.PlayButton>

        <Styled.ContentInfo>
          <p>
            <span>{year}</span> &bull;{' '}
            <span>
              {' '}
              {type === 'movie' ? (
                <img src={movieCategoryIcon} alt="movie category icon" />
              ) : (
                <img src={showCategoryIcon} alt="tv series category icon" />
              )}
              {type}
            </span>{' '}
            &bull;
            <span> {rating}</span>
          </p>
          <p>{title}</p>
        </Styled.ContentInfo>
      </Styled.ContentContainer>
    </Styled.LargeContent>
  );
};

export default memo(LargeContent);

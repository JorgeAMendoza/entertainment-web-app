import { useState, useEffect } from 'react';
import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../../assets/icon-bookmark-full.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';
import useBookmarkMutation from '../../hooks/bookmarkMutation';
import useUnbookmarkMutation from '../../hooks/unbookmarkMutation';
import Styled from './SmallContent.styled';
import { memo } from 'react';
import { useInView } from 'react-intersection-observer';

interface SmallContentProps {
  id: string;
  rating: string;
  title: string;
  type: string;
  year: number;
  bookmarked: boolean;
  images: {
    small: string;
    medium: string;
    large: string;
  };
}

const SmallContentCard = ({
  rating,
  title,
  type,
  year,
  bookmarked,
  id,
  images,
}: SmallContentProps) => {
  const { bookmarkContent } = useBookmarkMutation();
  const { unbookmarkContent } = useUnbookmarkMutation();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [itemInView, setItemInView] = useState(false);

  useEffect(() => {
    if (inView && itemInView) return;
    if (inView) setItemInView(true);
  }, [inView]);
  const bookmark = () => {
    if (!bookmarked)
      void bookmarkContent({
        variables: { contentId: id, contentType: type },
      });
    else {
      void unbookmarkContent({
        variables: { contentId: id, contentType: type },
      });
    }
  };
  return (
    <div ref={ref}>
      {!itemInView ? (
        <Styled.DummySmallContent />
      ) : (
        <Styled.SmallContent>
          <Styled.ImageContainer tabIndex={0}>
            <Styled.BookmarkButton
              data-cy="bookmarkButton"
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

            <Styled.PlayButton aria-label={`click to play ${title}`}>
              <span>
                <img src={playIcon} alt="play icon" />
              </span>
              Play
            </Styled.PlayButton>

            <picture>
              <source
                srcSet={'http://localhost:4000/' + images.medium}
                media="(min-width:768px)"
              />
              <img
                src={'http://localhost:4000/' + images.small}
                alt={`image of ${title}`}
              />
            </picture>
          </Styled.ImageContainer>

          <Styled.ContentContainer>
            <Styled.ContentInfo>
              <p aria-label="content release year">{year}</p>&bull;
              <Styled.ContentIcon>
                {type === 'movie' ? (
                  <img src={movieCategoryIcon} alt="movie category icon" />
                ) : (
                  <img src={showCategoryIcon} alt="tv series category icon" />
                )}
                <p>{type}</p>
              </Styled.ContentIcon>{' '}
              &bull;<span>{rating}</span>
            </Styled.ContentInfo>
            <Styled.Title data-cy="smallContentTitle">{title}</Styled.Title>
          </Styled.ContentContainer>
        </Styled.SmallContent>
      )}
    </div>
  );
};

export default memo(SmallContentCard);

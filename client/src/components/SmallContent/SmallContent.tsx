import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../../assets/icon-bookmark-full.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';
import {
  useBookmarkContentMutation,
  useUnbookmarkContentMutation,
} from '../../generated/graphql';

interface SmallContentProps {
  id: string;
  image: string;
  rating: string;
  title: string;
  type: string;
  year: number;
  bookmarked: boolean;
}

const SmallContentCard = ({
  rating,
  title,
  type,
  year,
  bookmarked,
  id,
}: SmallContentProps) => {
  const [bookmarkContent, { loading: bookmarkLoading }] =
    useBookmarkContentMutation();
  const [unbookmarkContent, { loading: unbookmarkLoading }] =
    useUnbookmarkContentMutation();
  // the small content is based on the query on the route for which the props were passed in, small content can be based on shows, movies, bookmarked and recommended, so when we do either, we need to modify the cache for all, or poll of them again, (we can avoid movie/show based on type at least)

  // lets start off with doing the bookmarked query,

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
    <figure>
      {/* this first div will have the image as the background, with the button inside placed absoluteley.  */}
      <div>
        <button
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
        </button>

        <button aria-label="click to play (current content name here)">
          <div>
            <img src={playIcon} alt="play icon" />
          </div>
          play
        </button>
      </div>

      <div>
        <div>
          <p aria-label="content release year">{year} &bull; </p>
          <div>
            {type === 'movie' ? (
              <img src={movieCategoryIcon} alt="movie category icon" />
            ) : (
              <img src={showCategoryIcon} alt="tv series category icon" />
            )}
            <p>{type}</p>
          </div>{' '}
          &bull; <span>{rating}</span>
        </div>
        <div>
          <h4>{title}</h4>
        </div>
      </div>
    </figure>
  );
};

export default SmallContentCard;

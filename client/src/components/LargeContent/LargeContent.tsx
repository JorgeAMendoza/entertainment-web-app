import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../../assets/icon-bookmark-full.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';
import { useUnbookmarkContentMutation } from '../../generated/graphql';
import useBookmarkMutation from '../../hooks/bookmarkMutation';

// logic required to choose between movie or show icon
// so the image is the entire background of the component, meaning it will need to be passed into the styled component like that.
interface LargeContentProps {
  id: string;
  title: string;
  year: number;
  type: string;
  rating: string;
  image: string;
  bookmarked: boolean;
}

const LargeContent = ({
  id,
  title,
  year,
  type,
  rating,
  bookmarked,
}: LargeContentProps) => {
  const { bookmarkContent } = useBookmarkMutation();
  const [unbookmarkContent] = useUnbookmarkContentMutation();

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

      <div>
        <div>
          <button aria-label="click the button to play (content name here)">
            <img src={playIcon} alt="play the content (content name here)" />
          </button>
        </div>
        <p>play</p>
      </div>

      <div>
        <div>
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
          <h3>{title}</h3>
        </div>
      </div>
    </figure>
  );
};

export default LargeContent;

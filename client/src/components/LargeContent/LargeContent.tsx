import bookmarkIcon from '../../assets/icon-bookmark-empty.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';

// logic required to choose between movie or show icon
// so the image is the entire background of the component, meaning it will need to be passed into the styled component like that.
interface LargeContentProps {
  title: string;
  year: number;
  type: string;
  rating: string;
  image: string;
}

const LargeContent = ({ title, year, type, rating }: LargeContentProps) => {
  return (
    <figure>
      <button>
        <img
          src={bookmarkIcon}
          alt="bookmark the contnet (content name placed here)"
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

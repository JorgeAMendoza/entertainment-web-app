import bookmarkIcon from '../../assets/icon-bookmark-empty.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';

interface SmallContentProps {
  image: string;
  rating: string;
  title: string;
  type: string;
  year: number;
}

const SmallContentCard = ({
  rating,
  title,
  type,
  year,
}: SmallContentProps) => {
  return (
    <figure>
      {/* this first div will have the image as the background, with the button inside placed absoluteley.  */}
      <div>
        <button aria-label="click to bookmark(current content name here)">
          <img src={bookmarkIcon} alt="bookmark content icon" />
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

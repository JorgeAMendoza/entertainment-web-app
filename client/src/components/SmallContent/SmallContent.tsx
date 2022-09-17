import bookmarkIcon from '../../assets/icon-bookmark-empty.svg';
import playIcon from '../../assets/icon-play.svg';

const SmallContent = () => {
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
          <span>content year</span> &bull;{' '}
          <span>content icon, content type</span> &bull;{' '}
          <span>content rating</span>
        </div>
      </div>
    </figure>
  );
};

export default SmallContent;

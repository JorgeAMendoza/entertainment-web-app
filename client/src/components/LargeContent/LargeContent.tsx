import bookmarkIcon from '../../assets/icon-bookmark-empty.svg';
import playIcon from '../../assets/icon-play.svg';

// logic required to choose between movie or show icon

const LargeContent = () => {
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
            <span>content year</span> &bull; <span>Content Type</span> &bull;
            <span>content rating</span>
          </p>
          <h3>content title</h3>
        </div>
      </div>
    </figure>
  );
};

export default LargeContent;

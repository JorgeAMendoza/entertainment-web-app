import bookmarkIconEmpty from '../../assets/icon-bookmark-empty.svg';
import bookmarkIconFull from '../../assets/icon-bookmark-full.svg';
import playIcon from '../../assets/icon-play.svg';
import movieCategoryIcon from '../../assets/icon-category-movie.svg';
import showCategoryIcon from '../../assets/icon-category-tv.svg';
import {
  useBookmarkContentMutation,
  useUnbookmarkContentMutation,
  User,
  Movie,
  Show,
} from '../../generated/graphql';
import { GET_BOOKMARKED_CONTENT } from '../../graphql/query';
import { ApolloCache } from '@apollo/client';

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
    useBookmarkContentMutation({
      update: (cache: ApolloCache<User>, { data: addBookmark }) => {
        cache.updateQuery(
          { query: GET_BOOKMARKED_CONTENT },
          (cached: { user: User } | null) => {
            if (!cached) return undefined;
            const user = cached.user;

            let bookmarkedMovies = user.bookmarkedMovies as Movie[];
            let bookmarkedShows = user.bookmarkedShows as Show[];
            const content = addBookmark?.bookmarkContent;

            if (content && content.type === 'movie') {
              const movieContent = content as Movie;
              bookmarkedMovies = bookmarkedMovies.concat(movieContent);
            }

            if (content && content.type === 'show') {
              const showContent = content as Show;
              bookmarkedShows = bookmarkedShows.concat(showContent);
            }

            return {
              user: { ...user, bookmarkedMovies, bookmarkedShows },
            };
          }
        );
      },
    });
  const [unbookmarkContent, { loading: unbookmarkLoading }] =
    useUnbookmarkContentMutation();

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

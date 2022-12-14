import {
  useBookmarkContentMutation,
  User,
  Movie,
  Show,
} from '../generated/graphql';
import { GET_BOOKMARKED_CONTENT } from '../graphql/query';
import { ApolloCache } from '@apollo/client';

const useBookmarkMutation = () => {
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

  return { bookmarkContent, bookmarkLoading };
};

export default useBookmarkMutation;

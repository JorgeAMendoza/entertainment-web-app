import {
  useUnbookmarkContentMutation,
  User,
  Movie,
  Show,
} from '../generated/graphql';
import { GET_BOOKMARKED_CONTENT } from '../graphql/query';
import { ApolloCache } from '@apollo/client';

const useUnbookmarkMutation = () => {
  const [unbookmarkContent, { loading: unbookmarkLoading }] =
    useUnbookmarkContentMutation({
      update: (cache: ApolloCache<User>, { data: removeBookmark }) => {
        cache.updateQuery(
          { query: GET_BOOKMARKED_CONTENT },
          (cached: { user: User } | null) => {
            if (!cached) return undefined;
            const user = cached.user;

            let bookmarkedMovies = user.bookmarkedMovies as Movie[];
            let bookmarkedShows = user.bookmarkedShows as Show[];
            const content = removeBookmark?.unbookmarkContent;

            if (content && content.type === 'movie') {
              bookmarkedMovies = bookmarkedMovies.filter(
                (movie) => movie.id !== content.id
              );
            }

            if (content && content.type === 'show') {
              bookmarkedShows = bookmarkedShows.filter(
                (show) => show.id !== content.id
              );
            }

            return {
              user: { ...user, bookmarkedMovies, bookmarkedShows },
            };
          }
        );
      },
    });

  return { unbookmarkContent, unbookmarkLoading };
};

export default useUnbookmarkMutation;

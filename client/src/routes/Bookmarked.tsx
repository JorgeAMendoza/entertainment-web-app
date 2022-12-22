import { useState, useMemo } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import { useGetBookmarkedContentQuery } from '../generated/graphql';
import { Show, Movie } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';

const Bookmarked = () => {
  const [search, setSearch] = useState('');
  const { loading, data: content } = useGetBookmarkedContentQuery();

  const searchedContent: (Show | Movie)[] = useMemo(() => {
    if (!content) return [];

    const bookmarkedMovies = content.user?.bookmarkedMovies as Movie[];
    const bookmarkedShows = content.user?.bookmarkedShows as Show[];

    const allBookmarkedContent = [...bookmarkedMovies, ...bookmarkedShows];

    return allBookmarkedContent.filter((content) =>
      content.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (search !== '' && searchedContent) {
    return (
      <main>
        <DashboardSearch search={search} setSearch={setSearch} />
        <SearchResults query={search} searchedData={searchedContent} />
      </main>
    );
  }

  return (
    <main>
      <DashboardSearch search={search} setSearch={setSearch} />

      {loading && (
        <div>
          <p>loading bookmarked content</p>
        </div>
      )}

      {content?.user?.bookmarkedMovies ? (
        <section>
          <h2>Bookmarked movies</h2>
          {content.user.bookmarkedMovies.length !== 0 ? (
            <div data-cy="bookmarkMovies">
              {content.user.bookmarkedMovies.map((movie) => (
                <SmallContent
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  type={movie.type}
                  image={movie.images.medium}
                  bookmarked={movie.bookmarked}
                />
              ))}
            </div>
          ) : (
            <div>
              <p>bookmarked content can be found here</p>
            </div>
          )}
        </section>
      ) : null}

      {content?.user?.bookmarkedShows ? (
        <section>
          <h2>Bookmarked TV Series</h2>
          {content.user.bookmarkedShows.length !== 0 ? (
            <div data-cy="bookmarkMovies">
              {content.user.bookmarkedShows.map((show) => (
                <SmallContent
                  key={show.id}
                  id={show.id}
                  title={show.title}
                  year={show.year}
                  rating={show.rating}
                  type={show.type}
                  image={show.images.medium}
                  bookmarked={show.bookmarked}
                />
              ))}
            </div>
          ) : (
            <div>
              <p>bookmarked content can be found here</p>
            </div>
          )}
        </section>
      ) : null}
    </main>
  );
};

export default Bookmarked;

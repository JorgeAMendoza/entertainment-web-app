import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import { useGetBookmarkedContentQuery } from '../generated/graphql';

const Bookmarked = () => {
  const { loading, error, data } = useGetBookmarkedContentQuery();

  if (loading) {
    return (
      <main>
        <DashboardSearch />

        <div>
          <p>Loading content</p>
          {/* remember that we will laziliy render */}
        </div>
      </main>
    );
  }

  if (
    data &&
    data.user?.bookmarkedMovies?.length === 0 &&
    data.user.bookmarkedShows?.length === 0
  ) {
    return (
      <main data-cy="bookmarkPage">
        <DashboardSearch />

        <div>
          <p>No bookmarked movies or shows</p>
          <p>any content bookmarked will appear on this page</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <DashboardSearch />

      {data?.user?.bookmarkedMovies ? (
        <section>
          <h2>Bookmarked movies</h2>
          <div data-cy="bookmarkedMovies">
            {data.user.bookmarkedMovies.map((movie) => (
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
        </section>
      ) : null}

      <section>
        <h2>Bookmarked TV Series</h2>
        <div data-cy="bookmarkedShows">
          {data?.user?.bookmarkedShows
            ? data.user.bookmarkedShows.map((show) => (
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
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default Bookmarked;

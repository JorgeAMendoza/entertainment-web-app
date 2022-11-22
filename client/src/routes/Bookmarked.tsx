import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import {
  useGetBookmarkedMoviesQuery,
  useGetBookmarkedShowsQuery,
} from '../generated/graphql';

const Bookmarked = () => {
  const { loading: loadingBookmarkedMovies, data: bookmarkedMovieData } =
    useGetBookmarkedMoviesQuery();
  const { loading: loadingBookmarkedShows, data: bookmarkedShowData } =
    useGetBookmarkedShowsQuery();

  if (loadingBookmarkedMovies || loadingBookmarkedShows) {
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
    !bookmarkedMovieData?.user?.bookmarkedMovies &&
    !bookmarkedShowData?.user?.bookmarkedShows
  ) {
    return (
      <main>
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

      {bookmarkedMovieData?.user?.bookmarkedMovies ? (
        <section>
          <h2>Bookmarked movies</h2>
          <div>
            {bookmarkedMovieData.user.bookmarkedMovies.map((movie) => (
              <SmallContent
                key={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                type={movie.type}
                image={movie.images.medium}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2>Bookmarked TV Series</h2>
        <div>
          {bookmarkedShowData?.user?.bookmarkedShows
            ? bookmarkedShowData.user.bookmarkedShows.map((show) => (
                <SmallContent
                  key={show.id}
                  title={show.title}
                  year={show.year}
                  rating={show.rating}
                  type={show.type}
                  image={show.images.medium}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default Bookmarked;

import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';

const Movies = () => {
  const { loading, error, data } = useGetAllMoviesQuery();

  return (
    <main data-cy="moviePage">
      <DashboardSearch />

      <section>
        <h1>Movies</h1>

        <div>{loading ? <p>loading movies</p> : null}</div>
        <div data-cy="moviesList">
          {data
            ? data.movies.map((movie) => (
                <SmallContentCard
                  key={movie.id}
                  image={movie.images.medium}
                  rating={movie.rating}
                  title={movie.title}
                  type={movie.type}
                  year={movie.year}
                  bookmarked={movie.bookmarked}
                  id={movie.id}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default Movies;

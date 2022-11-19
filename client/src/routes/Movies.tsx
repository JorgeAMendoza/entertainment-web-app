import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';

const Movies = () => {
  const { loading, error, data } = useGetAllMoviesQuery();

  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Movies</h2>

        <div>{loading ? <p>loading movies</p> : null}</div>
        <div>
          {data
            ? data.movies.map((movie) => (
                <SmallContentCard
                  key={movie.id}
                  images={movie.images}
                  rating={movie.rating}
                  title={movie.title}
                  type={movie.type}
                  year={movie.year}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default Movies;

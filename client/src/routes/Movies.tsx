import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';

const Movies = () => {
  const { loading, data: content } = useGetAllMoviesQuery();
  const [search, setSearch] = useState('');

  const searchedContent = useMemo(() => {
    return content?.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search)
    );
  }, [search]);

  if (search !== '' && searchedContent) {
    console.log(searchedContent);
    return (
      <main>
        <DashboardSearch search={search} setSearch={setSearch} />
        <p>we are searching</p>
      </main>
    );
  }

  return (
    <main data-cy="moviePage">
      <DashboardSearch search={search} setSearch={setSearch} />

      <section>
        <h1>Movies</h1>

        <div>{loading ? <p>loading movies</p> : null}</div>
        <div data-cy="moviesList">
          {content
            ? content.movies.map((movie) => (
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

import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';

const Movies = () => {
  const { loading, data: content } = useGetAllMoviesQuery();
  const [search, setSearch] = useState('');

  const searchedContent = useMemo(() => {
    return content?.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (search !== '' && searchedContent) {
    return (
      <main>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </main>
    );
  }

  return (
    <main data-cy="moviePage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for movies"
      />

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

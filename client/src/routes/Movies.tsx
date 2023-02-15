import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';
import RouteContainer from '../styles/utils/RouteContainer.styled';
import ContentSection from '../components/ContentSection/ContentSection';

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
      <RouteContainer>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </RouteContainer>
    );
  }

  return (
    <RouteContainer data-cy="moviePage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for movies"
      />

      <section>
        <div>{loading ? <p>loading movies</p> : null}</div>
        <ContentSection title="Movies">
          {content
            ? content.movies.map((movie) => (
                <SmallContentCard
                  key={movie.id}
                  rating={movie.rating}
                  title={movie.title}
                  type={movie.type}
                  year={movie.year}
                  bookmarked={movie.bookmarked}
                  id={movie.id}
                  images={movie.images}
                />
              ))
            : null}
        </ContentSection>
      </section>
    </RouteContainer>
  );
};

export default Movies;

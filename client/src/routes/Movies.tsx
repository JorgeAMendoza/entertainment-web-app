import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';
import { PageContainer } from '../styles/utils/Container.styled';
import ContentSection from '../components/ContentSection/ContentSection';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import PageError from '../components/PageError/PageError';

const Movies = () => {
  const { loading, data: content, error } = useGetAllMoviesQuery();
  const [search, setSearch] = useState('');

  const searchedContent = useMemo(() => {
    return content?.movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (error) {
    return (
      <PageContainer>
        <PageError />
      </PageContainer>
    );
  }

  if (loading)
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );

  if (search !== '' && searchedContent) {
    return (
      <PageContainer data-cy="moviePage">
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </PageContainer>
    );
  }

  return (
    <PageContainer data-cy="moviePage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for movies"
      />
      <ContentSection title="Movies" testId="movieList">
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
    </PageContainer>
  );
};

export default Movies;

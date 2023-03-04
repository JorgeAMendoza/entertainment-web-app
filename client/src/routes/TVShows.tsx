import { useState, useMemo } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import SearchResults from '../components/SearchResults/SearchResults';
import { useGetAllShowsQuery } from '../generated/graphql';
import { PageContainer } from '../styles/utils/Container.styled';
import ContentSection from '../components/ContentSection/ContentSection';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import PageError from '../components/PageError/PageError';

const TVShows = () => {
  const [search, setSearch] = useState('');
  const { loading, data: content, error } = useGetAllShowsQuery();

  const searchedContent = useMemo(() => {
    return content?.shows.filter((show) =>
      show.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (error)
    return (
      <PageContainer>
        <PageError />
      </PageContainer>
    );

  if (loading)
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );

  if (search !== '' && searchedContent) {
    return (
      <PageContainer>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for TV shows"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </PageContainer>
    );
  }

  return (
    <PageContainer data-cy="showPage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for TV shows"
      />
      <ContentSection title="TV Series" testId="showList">
        {content
          ? content.shows.map((show) => (
              <SmallContent
                key={show.id}
                rating={show.rating}
                title={show.title}
                type={show.type}
                year={show.year}
                id={show.id}
                bookmarked={show.bookmarked}
                images={show.images}
              />
            ))
          : null}
      </ContentSection>
    </PageContainer>
  );
};

export default TVShows;

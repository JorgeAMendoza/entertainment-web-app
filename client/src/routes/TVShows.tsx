import { useState, useMemo } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import SearchResults from '../components/SearchResults/SearchResults';
import { useGetAllShowsQuery } from '../generated/graphql';
import { PageContainer } from '../styles/utils/Container.styled';
import ContentSection from '../components/ContentSection/ContentSection';

const TVShows = () => {
  const [search, setSearch] = useState('');
  const { loading, data: content } = useGetAllShowsQuery();

  const searchedContent = useMemo(() => {
    return content?.shows.filter((show) =>
      show.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

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

      <section>
        <div>{loading ? <p>loading shows</p> : null}</div>
        <ContentSection title="TV Series">
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
      </section>
    </PageContainer>
  );
};

export default TVShows;

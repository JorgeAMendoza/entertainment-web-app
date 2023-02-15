import { useState, useMemo } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import { useGetBookmarkedContentQuery } from '../generated/graphql';
import { Show, Movie } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';
import { PageContainer } from '../styles/utils/Container.styled';
import ContentSection from '../components/ContentSection/ContentSection';

const Bookmarked = () => {
  const [search, setSearch] = useState('');
  const { loading, data: content } = useGetBookmarkedContentQuery();

  const searchedContent: (Show | Movie)[] = useMemo(() => {
    if (!content) return [];

    const bookmarkedMovies = content.user?.bookmarkedMovies as Movie[];
    const bookmarkedShows = content.user?.bookmarkedShows as Show[];

    const allBookmarkedContent = [...bookmarkedMovies, ...bookmarkedShows];

    return allBookmarkedContent.filter((content) =>
      content.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (search !== '' && searchedContent) {
    return (
      <PageContainer data-cy="bookmarkPage">
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for bookmarked content"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </PageContainer>
    );
  }

  return (
    <PageContainer data-cy="bookmarkPage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for bookmarked content"
      />

      {loading && (
        <div>
          <p>loading bookmarked content</p>
        </div>
      )}

      <ContentSection title="Bookmarked Movies">
        {content?.user?.bookmarkedMovies ? (
          content.user.bookmarkedMovies.length !== 0 ? (
            content.user.bookmarkedMovies.map((movie) => (
              <SmallContent
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                type={movie.type}
                bookmarked={movie.bookmarked}
                images={movie.images}
              />
            ))
          ) : (
            <div>
              <p>bookmarked content can be found here</p>
            </div>
          )
        ) : null}
      </ContentSection>

      <ContentSection title="Bookmarked TV Series">
        {content?.user?.bookmarkedShows ? (
          content.user.bookmarkedShows.length !== 0 ? (
            content.user.bookmarkedShows.map((show) => (
              <SmallContent
                key={show.id}
                id={show.id}
                title={show.title}
                year={show.year}
                rating={show.rating}
                type={show.type}
                bookmarked={show.bookmarked}
                images={show.images}
              />
            ))
          ) : (
            <div>
              <p>bookmarked content can be found here</p>
            </div>
          )
        ) : null}{' '}
      </ContentSection>
    </PageContainer>
  );
};

export default Bookmarked;

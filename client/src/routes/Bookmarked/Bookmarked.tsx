import { useState, useMemo } from 'react';
import DashboardSearch from '../../components/DashboardSearch/DashboardSearch';
import SmallContent from '../../components/SmallContent/SmallContent';
import { useGetBookmarkedContentQuery } from '../../generated/graphql';
import { Show, Movie } from '../../generated/graphql';
import SearchResults from '../../components/SearchResults/SearchResults';
import { PageContainer } from '../../styles/utils/Container.styled';
import ContentSection from '../../components/ContentSection/ContentSection';
import NoBookmarks from '../../components/NoBookmarks/NoBookmarks';
import Styled from './Bookmarked.styled';

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

  if (
    content?.user?.bookmarkedMovies?.length === 0 &&
    content.user.bookmarkedShows?.length === 0
  ) {
    return (
      <PageContainer>
        <NoBookmarks />
      </PageContainer>
    );
  }

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
            <Styled.NoContentMessage>
              <p>No, bookmarked movies.</p>
              <p>Save movies to find them here later!</p>
            </Styled.NoContentMessage>
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
            <Styled.NoContentMessage>
              <p>No, bookmarked shows.</p>
              <p>Save shows to find them here later!</p>
            </Styled.NoContentMessage>
          )
        ) : null}{' '}
      </ContentSection>
    </PageContainer>
  );
};

export default Bookmarked;

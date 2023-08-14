import { useEffect, useState } from 'react';
import DashboardSearch from '../../components/DashboardSearch/DashboardSearch';
import LargeContent from '../../components/LargeContent/LargeContent';
import SmallContent from '../../components/SmallContent/SmallContent';
import {
  useGetHomepageContentQuery,
  useSearchAllContentLazyQuery,
} from '../../generated/graphql';
import SearchResults from '../../components/SearchResults/SearchResults';
import {
  PageContainer,
  RouteContainer,
} from '../../styles/utils/Container.styled';
import Styled from './HomePage.styled';
import ContentSection from '../../components/ContentSection/ContentSection';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PageError from '../../components/PageError/PageError';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const {
    loading: homepageLoading,
    data: homepageContent,
    error: homepageError,
  } = useGetHomepageContentQuery();
  const [getSearch, { loading: searchLoading, data: searchedContent }] =
    useSearchAllContentLazyQuery({
      variables: {
        title: search,
      },
    });

  useEffect(() => {
    if (search === '') return;
    void searchAllContent();
  }, [search]);

  const searchAllContent = async (): Promise<void> => {
    await getSearch();
  };

  if (homepageError)
    return (
      <PageContainer>
        <PageError />
      </PageContainer>
    );

  if (homepageLoading) {
    <RouteContainer>
      <LoadingSpinner />
    </RouteContainer>;
  }

  if (search !== '') {
    if (searchLoading) {
      <RouteContainer>
        <DashboardSearch
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <p>Searching</p>
      </RouteContainer>;
    }

    const searchResult = searchedContent?.search ? searchedContent.search : [];
    return (
      <RouteContainer>
        <DashboardSearch
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <SearchResults query={search} searchedData={searchResult} />
      </RouteContainer>
    );
  }

  return (
    <RouteContainer>
      <DashboardSearch
        setSearch={setSearch}
        placeholderText="Search for movies or TV series"
      />

      <Styled.TrendingTitle>Trending</Styled.TrendingTitle>
      <Styled.TrendingSection>
        <Styled.TrendingItems data-cy="trendingContent">
          {homepageContent &&
            homepageContent.homepage.trending.map((content) => (
              <LargeContent
                key={content.id}
                id={content.id}
                title={content.title}
                type={content.type}
                rating={content.rating}
                year={content.year}
                images={content.images}
                bookmarked={content.bookmarked}
              />
            ))}
        </Styled.TrendingItems>
      </Styled.TrendingSection>

      <ContentSection title="Recommended for you">
        {homepageContent &&
          homepageContent.homepage.recommended.map((content) => (
            <SmallContent
              key={content.id}
              title={content.title}
              year={content.year}
              type={content.type}
              rating={content.rating}
              id={content.id}
              bookmarked={content.bookmarked}
              images={content.images}
            />
          ))}
      </ContentSection>
    </RouteContainer>
  );
};

export default Homepage;

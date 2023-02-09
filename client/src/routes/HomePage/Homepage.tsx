import { useEffect, useState } from 'react';
import DashboardSearch from '../../components/DashboardSearch/DashboardSearch';
import LargeContent from '../../components/LargeContent/LargeContent';
import SmallContent from '../../components/SmallContent/SmallContent';
import {
  useGetHomepageContentQuery,
  useSearchAllContentLazyQuery,
} from '../../generated/graphql';
import SearchResults from '../../components/SearchResults/SearchResults';
import RouteContainer from '../../styles/utils/RouteContainer.styled';
import Styled from './HomePage.styled';
import ContentSection from '../../components/ContentSection/ContentSection';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const { loading: homepageLoading, data: homepageContent } =
    useGetHomepageContentQuery();
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

  if (search !== '') {
    if (searchLoading) {
      <RouteContainer>
        <DashboardSearch
          search={search}
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
          search={search}
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
        search={search}
        setSearch={setSearch}
        placeholderText="Search for movies or TV series"
      />

      <Styled.TrendingTitle>Trending</Styled.TrendingTitle>
      <Styled.TrendingSection>
        {homepageLoading && <p>loading trending content</p>}

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
                images={{
                  small: content.images.small,
                  medium: content.images.medium,
                  large: content.images.large,
                }}
                bookmarked={content.bookmarked}
              />
            ))}
        </Styled.TrendingItems>
      </Styled.TrendingSection>

      <ContentSection title="Recommended for you">
        <div data-cy="recommendedContent">
          {homepageLoading && <p>Loading Recommended Content</p>}
          {homepageContent &&
            homepageContent.homepage.recommended.map((content) => (
              <SmallContent
                key={content.id}
                title={content.title}
                year={content.year}
                type={content.type}
                rating={content.rating}
                image={content.images.medium}
                id={content.id}
                bookmarked={content.bookmarked}
              />
            ))}
        </div>
      </ContentSection>
    </RouteContainer>
  );
};

export default Homepage;

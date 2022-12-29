import { useEffect, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import LargeContent from '../components/LargeContent/LargeContent';
import SmallContent from '../components/SmallContent/SmallContent';
import {
  useGetHomepageContentQuery,
  useSearchAllContentLazyQuery,
} from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';

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
      <main>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <p>Searching</p>
      </main>;
    }

    const searchResult = searchedContent?.search ? searchedContent.search : [];
    return (
      <main>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for movies or TV series"
        />
        <SearchResults query={search} searchedData={searchResult} />
      </main>
    );
  }

  return (
    <main>
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for movies or TV series"
      />

      <section>
        <h2>Trending</h2>
        {homepageLoading && <p>loading trending content</p>}
        <div data-cy="trendingContent">
          {homepageContent &&
            homepageContent.homepage.trending.map((content) => (
              <LargeContent
                key={content.id}
                id={content.id}
                title={content.title}
                type={content.type}
                rating={content.rating}
                year={content.year}
                image={content.images.large}
                bookmarked={content.bookmarked}
              />
            ))}
        </div>
      </section>

      <section>
        <h2>Recommended for you</h2>
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
      </section>
    </main>
  );
};

export default Homepage;

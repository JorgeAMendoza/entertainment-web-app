import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import LargeContent from '../components/LargeContent/LargeContent';
import SmallContent from '../components/SmallContent/SmallContent';
import { Movie, Show, useGetHomepageContentQuery } from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const { loading: homepageLoading, data: homepageContent } =
    useGetHomepageContentQuery();

  // if (search !== '' && searchedContent) {
  //   return (
  //     <main>
  //       <DashboardSearch search={search} setSearch={setSearch} />
  //       <SearchResults query={search} searchedData={searchedContent} />
  //     </main>
  //   );
  // }

  return (
    <main>
      <DashboardSearch search={search} setSearch={setSearch} />

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

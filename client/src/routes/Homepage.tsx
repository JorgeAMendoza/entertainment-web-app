import { useMemo, useState } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import LargeContent from '../components/LargeContent/LargeContent';
import SmallContent from '../components/SmallContent/SmallContent';
import {
  Movie,
  Show,
  useGetRecommendedContentQuery,
  useGetTrendingContentQuery,
} from '../generated/graphql';
import SearchResults from '../components/SearchResults/SearchResults';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const { loading: loadingTrending, data: trendingContent } =
    useGetTrendingContentQuery();
  const { loading: loadingRecommended, data: recommendedContent } =
    useGetRecommendedContentQuery();

  const searchedContent: (Movie | Show)[] = useMemo(() => {
    if (!trendingContent || !recommendedContent) return [];

    return recommendedContent.recommended.content.filter((content) =>
      content.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, trendingContent, recommendedContent]);

  if (search !== '' && searchedContent) {
    return (
      <main>
        <DashboardSearch search={search} setSearch={setSearch} />
        <SearchResults query={search} searchedData={searchedContent} />
      </main>
    );
  }

  return (
    <main>
      <DashboardSearch search={search} setSearch={setSearch} />

      <section>
        <h2>Trending</h2>
        {loadingTrending && <p>loading trending content</p>}
        <div data-cy="trendingContent">
          {trendingContent &&
            trendingContent.trending.content.map((content) => (
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
          {loadingRecommended && <p>Loading Recommended Content</p>}
          {recommendedContent &&
            recommendedContent.recommended.content.map((content) => (
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

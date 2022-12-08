import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import LargeContent from '../components/LargeContent/LargeContent';
import SmallContent from '../components/SmallContent/SmallContent';
import {
  useGetRecommendedContentQuery,
  useGetTrendingContentQuery,
} from '../generated/graphql';

const Homepage = () => {
  const { loading: loadingTrending, data: trendingData } =
    useGetTrendingContentQuery();
  const { loading: loadingRecommended, data: recommendeData } =
    useGetRecommendedContentQuery();

  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Trending</h2>
        {loadingTrending && <p>loading trending content</p>}
        {trendingData &&
          trendingData.trending.content.map((content) => (
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
      </section>

      <section>
        <h2>Recommended for you</h2>
        <div>
          {loadingRecommended && <p>Loading Recommended Content</p>}
          {recommendeData &&
            recommendeData.recommended.content.map((content) => (
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

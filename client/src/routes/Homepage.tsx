import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import LargeContent from '../components/LargeContent/LargeContent';
import SmallContent from '../components/SmallContent/SmallContent';
import { useGetTrendingContentQuery } from '../generated/graphql';

const Homepage = () => {
  const { loading, data } = useGetTrendingContentQuery();

  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Trending</h2>
        {/* <div>
          <LargeContent />
          
        </div> */}
        {loading && <p>loading trending content</p>}
        {data &&
          data.trending.content.map((content) => (
            <LargeContent
              key={content.id}
              title={content.title}
              type={content.type}
              rating={content.rating}
              year={content.year}
              image={content.images.large}
            />
          ))}
      </section>

      <section>
        <h2>Recommended for you</h2>
        <div>
          {/* <SmallContent /> */}
          {/* 24 pieces of small content */}
        </div>
      </section>
    </main>
  );
};

export default Homepage;

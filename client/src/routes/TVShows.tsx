import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import { useGetAllShowsQuery } from '../generated/graphql';

const TVShows = () => {
  const { loading, error, data } = useGetAllShowsQuery();
  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Tv Series</h2>

        <div>{loading ? <p>loading shows</p> : null}</div>
        <div>
          {data
            ? data.shows.map((show) => (
                <SmallContent
                  key={show.id}
                  image={show.images.medium}
                  rating={show.rating}
                  title={show.title}
                  type={show.type}
                  year={show.year}
                  id={show.id}
                  bookmarked={show.bookmarked}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default TVShows;

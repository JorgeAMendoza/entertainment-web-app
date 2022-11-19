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
                  images={show.images}
                  rating={show.rating}
                  title={show.title}
                  type={show.type}
                  year={show.year}
                />
              ))
            : null}
        </div>
      </section>
    </main>
  );
};

export default TVShows;

import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContentCard from '../components/SmallContent/SmallContent';
import { useGetAllMoviesQuery } from '../generated/graphql';

const Movies = () => {
  const { loading, error, data } = useGetAllMoviesQuery();

  console.log(data);

  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Movies</h2>
        {/* <div>
          <SmallContent />
        </div> */}
        {/* <div>{loading ? <p>Loading movies</p> : <SmallContentCard />}</div> */}
      </section>
    </main>
  );
};

export default Movies;

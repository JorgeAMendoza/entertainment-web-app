import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';

const Movies = () => {
  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Movies</h2>
        <div>
          <SmallContent />
        </div>
      </section>
    </main>
  );
};

export default Movies;

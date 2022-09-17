import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';

const TVShows = () => {
  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Tv Series</h2>
        <div>
          <SmallContent />
        </div>
      </section>
    </main>
  );
};

export default TVShows;

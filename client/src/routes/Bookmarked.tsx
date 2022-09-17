import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';

const Bookmarked = () => {
  // if there is nothing saved for booth bookarmed and tv shows, then return the dashboard search with a message saying nothing is saved.

  // if one of two sections dont have anythign bookmarked, then dont render it. Or maybe its better to render a smaller error message just to give the user that better feedback.
  return (
    <main>
      <DashboardSearch />

      <section>
        <h2>Bookmarked movies</h2>
        <div>
          <SmallContent />
        </div>
      </section>

      <section>
        <h2>Bookmarked TV Series</h2>
        <div>
          <SmallContent />
        </div>
      </section>
    </main>
  );
};

export default Bookmarked;

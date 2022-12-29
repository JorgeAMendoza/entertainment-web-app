import { useState, useMemo } from 'react';
import DashboardSearch from '../components/DashboardSearch/DashboardSearch';
import SmallContent from '../components/SmallContent/SmallContent';
import SearchResults from '../components/SearchResults/SearchResults';
import { useGetAllShowsQuery } from '../generated/graphql';

const TVShows = () => {
  const [search, setSearch] = useState('');
  const { loading, data: content } = useGetAllShowsQuery();

  const searchedContent = useMemo(() => {
    return content?.shows.filter((show) =>
      show.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, content]);

  if (search !== '' && searchedContent) {
    return (
      <main>
        <DashboardSearch
          search={search}
          setSearch={setSearch}
          placeholderText="Search for TV shows"
        />
        <SearchResults query={search} searchedData={searchedContent} />
      </main>
    );
  }

  return (
    <main data-cy="showPage">
      <DashboardSearch
        search={search}
        setSearch={setSearch}
        placeholderText="Search for TV shows"
      />

      <section>
        <h1>TV Series</h1>

        <div>{loading ? <p>loading shows</p> : null}</div>
        <div data-cy="showList">
          {content
            ? content.shows.map((show) => (
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

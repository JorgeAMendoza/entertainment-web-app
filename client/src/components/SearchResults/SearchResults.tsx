import SmallContent from '../SmallContent/SmallContent';
import { Movie, Show } from '../../generated/graphql';

// need the serach result and the data.
interface SearchResultsProps {
  query: string;
  searchedData: Movie[] | Show[];
}

const SearchResults = ({ query, searchedData }: SearchResultsProps) => {
  return (
    <main>
      <h2>
        Found {searchedData.length} results for &apos;{query}&apos;
      </h2>
      <div>
        {searchedData.map((content) => (
          <SmallContent
            key={content.id}
            image={content.images.medium}
            rating={content.rating}
            title={content.title}
            type={content.type}
            year={content.year}
            bookmarked={content.bookmarked}
            id={content.id}
          />
        ))}
      </div>
    </main>
  );
};

export default SearchResults;

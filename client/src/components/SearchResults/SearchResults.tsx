import SmallContent from '../SmallContent/SmallContent';
import { Movie, Show } from '../../generated/graphql';
import ContentSection from '../ContentSection/ContentSection';

// need the serach result and the data.
interface SearchResultsProps {
  query: string;
  searchedData: (Movie | Show)[];
}

const SearchResults = ({ query, searchedData }: SearchResultsProps) => {
  return (
    <main>
      <ContentSection
        title={`Found ${searchedData.length} results for '${query}'`}
        testId="searchResults"
      >
        {searchedData.map((content) => (
          <SmallContent
            key={content.id}
            rating={content.rating}
            title={content.title}
            type={content.type}
            year={content.year}
            bookmarked={content.bookmarked}
            id={content.id}
            images={content.images}
          />
        ))}
      </ContentSection>
    </main>
  );
};

export default SearchResults;

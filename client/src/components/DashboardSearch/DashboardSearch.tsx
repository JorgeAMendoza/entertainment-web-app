import searchIcon from '../../assets/icon-search.svg';
import Container from '../../styles/utils/Container.styled';
import Styled from './DashboardSearch.styled';

interface DashboardSearchProps {
  search: string;
  setSearch: React.Dispatch<string>;
  placeholderText: string;
}

const DashboardSearch = ({
  search,
  setSearch,
  placeholderText,
}: DashboardSearchProps) => {
  return (
    <Container>
      <Styled.DashboardSearch data-cy="searchBar">
        <span>
          <img src={searchIcon} alt="Search icon" />
        </span>
        <Styled.Input
          type="text"
          name="searchContent"
          placeholder={placeholderText}
          id="searchContent"
          onChange={({ target }) => setSearch(target.value)}
          onBlur={({ target }) => setSearch(target.value)}
          value={search}
        />
      </Styled.DashboardSearch>
    </Container>
  );
};

export default DashboardSearch;

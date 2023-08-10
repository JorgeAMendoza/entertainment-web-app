import { useEffect, useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import Styled from './DashboardSearch.styled';

interface DashboardSearchProps {
  setSearch: React.Dispatch<string>;
  placeholderText: string;
}

const DashboardSearch = ({
  setSearch,
  placeholderText,
}: DashboardSearchProps) => {
  const [currentSearch, setCurrentSearch] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(currentSearch);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentSearch, setSearch]);

  return (
    <Styled.DashboardSearch data-cy="searchBar">
      <span>
        <img src={searchIcon} alt="Search icon" />
      </span>
      <Styled.Input
        type="text"
        name="searchContent"
        placeholder={placeholderText}
        id="searchContent"
        onChange={({ target }) => setCurrentSearch(target.value)}
        onBlur={({ target }) => setCurrentSearch(target.value)}
        value={currentSearch}
      />
    </Styled.DashboardSearch>
  );
};

export default DashboardSearch;

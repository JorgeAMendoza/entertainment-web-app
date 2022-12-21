import searchIcon from '../../assets/icon-search.svg';

interface DashboardSearchProps {
  search: string;
  setSearch: React.Dispatch<string>;
}

const DashboardSearch = ({ search, setSearch }: DashboardSearchProps) => {
  return (
    <label data-cy="searchBar">
      <span>
        <img src={searchIcon} alt="Search icon" />
      </span>
      <input
        type="text"
        name="searchContent"
        placeholder="Search for content"
        id="searchContent"
        onChange={({ target }) => setSearch(target.value)}
        onBlur={({ target }) => setSearch(target.value)}
        value={search}
      />
    </label>
  );
};

export default DashboardSearch;

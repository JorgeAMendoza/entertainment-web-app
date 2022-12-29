import searchIcon from '../../assets/icon-search.svg';

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
    <label data-cy="searchBar">
      <span>
        <img src={searchIcon} alt="Search icon" />
      </span>
      <input
        type="text"
        name="searchContent"
        placeholder={placeholderText}
        id="searchContent"
        onChange={({ target }) => setSearch(target.value)}
        onBlur={({ target }) => setSearch(target.value)}
        value={search}
      />
    </label>
  );
};

export default DashboardSearch;

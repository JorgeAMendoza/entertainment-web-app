import searchIcon from '../../assets/icon-search.svg';

const DashboardSearch = () => {
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
      />
    </label>
  );
};

export default DashboardSearch;

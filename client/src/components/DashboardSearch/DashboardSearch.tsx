import searchIcon from '../../assets/icon-search.svg';

const DashboardSearch = () => {
  return (
    <label>
      <div>
        <img src={searchIcon} alt="Search icon" />
      </div>
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

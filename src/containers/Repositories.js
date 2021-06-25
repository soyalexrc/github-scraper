import React, {useEffect, useState} from 'react';
import langColors from '../utils/langColors';
import FlipMove from 'react-flip-move';
import DropDown from "../components/Dropdown";
import RepoBox from '../components/RepoBox';
import '../styles/Repositories.css'

const Repositories = ({repoData}) => {
  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getTopRepos = type => {
    const LIMIT = 8;
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
    const sortProperty = map[type];
    const sorted = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);

    setTopRepos(sorted);
  };

  useEffect(() => {
    if (repoData.length) {
      getTopRepos();
    }
  }, []);

  useEffect(() => getTopRepos(sortType), [sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = sortType => {
    setSortType(sortType);
    toggleDropdown();
  };

  const sortTypes = ['stars', 'forks', 'size'];

  return (
    <section className='repositories-container'>
      <div className='repositories'>
        <header>
          <h2>Top Repos</h2>
          <div className="dropdown-wrapper">
            <span className="label">by</span>
            <DropDown
              changeRepoSort={changeRepoSort}
              sortType={sortType}
              sortTypes={sortTypes}
              toggleDropdown={toggleDropdown}
              active={dropdownOpen}/>
          </div>
        </header>

        <div className="repo-list">
          {topRepos.length > 0 ? (
            <FlipMove typeName="ul">
              {topRepos.map(repo => (
                <li key={repo.id}>
                  <RepoBox langColors={langColors} repo={repo} />
                </li>
              ))}
            </FlipMove>
          ) : (
            <p>No available repositories!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Repositories;

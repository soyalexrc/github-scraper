import React, {useEffect, useState} from 'react';
import langColors from '../utils/langColors';
import FlipMove from 'react-flip-move';
import '../styles/Repositories.css'
import {GoRepo} from "react-icons/go";
import {AiFillStar} from "react-icons/ai";
import {BiGitRepoForked} from "react-icons/bi";
import {Link} from "@reach/router";
import {Dropdown, DropdownButton} from "react-bootstrap";

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
  });

  useEffect(() => getTopRepos(sortType), [getTopRepos, sortType]);

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
            <DropdownButton
              id="dropdown-button-dark-example2"
              variant="secondary"
              title={sortType}
              className="bs-dropdown"
            >
              {sortTypes.map((type, i) => (
                <Dropdown.Item key={i} onClick={() => changeRepoSort(type)}>
                  {type}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>

        </header>


        <div className="repo-list">
          {topRepos.length > 0 ? (
            <FlipMove typeName="ul">
              {topRepos.map(repo => (
                <li key={repo.id}>
                  <Link to={`/repo/${repo.name}`} className="repo">
                    <div className="repo__top">
                      <div className="repo__name">
                        <GoRepo/>
                        <h3>{repo.name}</h3>
                      </div>
                      <p>{repo.description}</p>
                    </div>
                    <div className="repo__stats">
                      <div className="repo__stats--left">
                        <span>
                          <div
                            className="language"
                            style={{backgroundColor: langColors[repo.language]}}
                          />
                          {repo.language}
                        </span>
                        <span>
                          <AiFillStar/>
                          {repo.stargazers_count.toLocaleString()}
                        </span>
                        <span>
                          <BiGitRepoForked/>
                          {repo.forks.toLocaleString()}
                        </span>
                      </div>
                      <div className="repo__stats--right">
                        <span>{repo.size.toLocaleString()} KB</span>
                      </div>
                    </div>
                  </Link>
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

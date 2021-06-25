import React from 'react';
import {BiGitRepoForked} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {GoRepo} from 'react-icons/go';
import { Link } from '@reach/router'
import '../styles/RepoBox.css';

const RepoBox = ({repo, langColors}) => {
  return (
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
  );
};

export default RepoBox;

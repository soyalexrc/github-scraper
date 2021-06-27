import React, {useEffect, useState} from 'react';
import {GoRepo} from "react-icons/go";
import { GoGitCommit } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa'
import '../styles/repoDetail.css';
import RateLimit from "../components/RateLimit";
import Corner from "../components/Corner";
import Error from "../components/Error";

const RepoDetail = props => {
  const repo = props.repo;
  const username = sessionStorage.getItem('username');
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState({active: false, type: 200});
  const [rateLimit, setRateLimit] = useState(null);

  // const DecodeDate = (date) => {
  //   let dateStr = JSON.parse(date);
  //   let resultDate = new Date(dateStr);
  //   return resultDate;
  // }

  const getCommits = () => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
      .then(response => {
        if (response.status === 404) {
          return setError({active: true, type: 404});
        }
        if (response.status === 403) {
          return setError({active: true, type: 403});
        }
        return response.json();
      })
      .then(response => setCommits(response))
      .then(response => console.log(response))
      .catch(error => {
        setError({active: true, type: 400});
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then(response => response.json())
      .then(json => {
        setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          setError({active: true, type: 403});
        }
      });

    getCommits()
  });

  return (
    <div>
      {rateLimit && <RateLimit rateLimit={rateLimit}/>}

      {error && error.active ? (
        <Error error={error}/>
      ) : (
        <>
          <Corner />
          {console.log(commits)}

          {commits !== null && commits !== undefined && (
            <>
              <div className='header'>
                <div className="header__desc">
                  <h2 className='repo__desc'><GoRepo/> {username} / {repo}</h2>
                </div>
              </div>
              <div className="commits__section">
                <div className="commits__container">
                  <div className="commit__container--list">
                    {
                      commits.map(commit => (
                        <div key={commit.sha} className='commit'>
                          <div className="commit__desc">
                            <h5>{commit.commit.message}</h5>
                          </div>
                          <div className="commit__bottom">
                            <div className='commit__bottom--left'>
                              {commit.author && (
                                <img src={commit.author.avatar_url} className='commit__user--image' alt="avatar"/>
                              )}
                              {commit.author && (
                                <h6 className='mb-0'>{commit.author.login}</h6>
                              )}
                              <p className='mx-4 mb-0'>{commit.commit.author.date}</p>
                              {commit.commit.verification.verified && (
                                <span className='verified'>Verified</span>
                              )}
                            </div>
                            <div className='commit__bottom--right'>
                              <a href={commit.html_url} target='_blank' rel='noreferrer'>
                                <GoGitCommit />
                              </a>
                              {commit.author && (
                                <a href={commit.author.html_url} target='_blank' rel='noreferrer'>
                                  <FaGithub />
                                </a>
                              )}
                            </div>
                            {/*<p>{() => DecodeDate(commit.commit.author.date)}</p>*/}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

    </div>
  )
};

export default RepoDetail;

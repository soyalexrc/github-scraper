import React, {useEffect, useState} from 'react';
import GhPolyglot from 'gh-polyglot';

import RateLimit from '../components/RateLimit';
import Error from '../components/Error';
import UserInfo from "../containers/UserInfo";
import Repositories from "../containers/Repositories";
import Graphics from "../containers/Graphics.js";
import Corner from "../components/Corner";

const UserResume = props => {
  const username = props.username;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({active: false, type: 200});
  const [rateLimit, setRateLimit] = useState(null);


  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          return setError({active: true, type: 404});
        }
        if (response.status === 403) {
          return setError({active: true, type: 403});
        }
        return response.json();
      })
      .then(json => {
        setUserData(json)
      })
      .catch(error => {
        setError({active: true, type: 400});
        console.error('Error:', error);
      });
  };


  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(response => {
        if (response.status === 404) {
          return setError({active: true, type: 404});
        }
        if (response.status === 403) {
          return setError({active: true, type: 403});
        }
        return response.json();
      })
      .then(json => {
        setRepoData(json)
        console.log(json)
      })
      .catch(error => {
        setError({active: true, type: 200});
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then(response => response.json())
      .then(json => {
        setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          setError({active: true, type: 403});
        }
      });

    getUserData();
    getLangData();
    getRepoData();
  }, []);

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
        setError({active: true, type: 400});
      }
      setLangData(stats);
    });
  };

  return (
    <main>
      {rateLimit && <RateLimit rateLimit={rateLimit}/>}

      {error && error.active ? (
        <Error error={error}/>
      ) : (
        <>
          <Corner/>

          {userData && <UserInfo userData={userData}/>}

          {langData && repoData && <Graphics langData={langData} repoData={repoData}/>}

          {repoData && <Repositories repoData={repoData}/>}
        </>
      )}
    </main>
  );
}
;

export default UserResume;

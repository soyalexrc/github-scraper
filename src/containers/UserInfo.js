import React from 'react';
import {FaCalendarAlt, FaSuitcase} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import '../styles/UserInfo.css'

const UserInfo = ({userData}) => {
  return (
    <section className='user-info-section'>
      {
        userData && (
          <div className='user-detail'>
            {
              userData.avatar_url && (
                <div className='avatar'>
                  <img src={userData.avatar_url} className='user-image' alt="avatar"/>
                </div>
              )}

            {userData.name && <h2 className='title'>{userData.name}</h2>}

            {
              userData.login && (
                <h2 className='sub-title'>
                  <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
                    @{userData.login}
                  </a>
                </h2>
              )}

            <div className='info'>
              {userData.company && (
                <span className="info__item">
                <FaSuitcase/>
                  {userData.company}
            </span>
              )}

              {userData.location && (
                <span className="info__item">
              <GoLocation/>
                  {userData.location}
               </span>
              )}

              {userData.created_at && (
                <span className="info__item">
                  <FaCalendarAlt/>
                  Joined{' '}
                  {new Date(userData.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            <div className="stats">
              <div className="stats__item">
                <span className="num">{userData.public_repos.toLocaleString()}</span>
                <span className="num-label">Repositories</span>
              </div>
              <div className="stats__item">
                <span className="num">{userData.followers.toLocaleString()}</span>
                <span className="num-label">Followers</span>
              </div>
              <div className="stats__item">
                <span className="num">{userData.following.toLocaleString()}</span>
                <span className="num-label">Following</span>
              </div>
            </div>

          </div>
        )
      }
    </section>
  );
}

export default UserInfo;

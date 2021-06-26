import React from 'react';
import '../styles/ListOfCommits.css'
import {GoRepo} from "react-icons/go";

const ListOfCommits = ({commitsData, repoName}) => {
  const userName = sessionStorage.getItem('username')
  return (
    <>
    <section className='user-info-section'>
      <div className='user-detail'>
        <h2 className='sub-title'> <GoRepo/> {userName} / {repoName} </h2>
      </div>
    </section>
      <div className='graphics-container'>
        <div className='graphics'>
          <div className="commits-container">
            {
              commitsData !== null && commitsData !== undefined ? (
                commitsData.map(commit => (
                  <div key={commit.sha}>
                    {commit.author.name}
                  </div>
                ))
              ) : commitsData === null ? (
                <div>commits es igual a null</div>
              ) : commitsData === undefined ? (
                <div>commits es igual a undefined</div>
              ) : 'hola mundo'
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfCommits;

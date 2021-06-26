import React from 'react';
import '../styles/NotFound.css';
import {navigate} from "@reach/router";

const imageText = '../assets/404image-2.jpg'

const NotFound = () => {

  const goBack = () => {
   navigate('/');
  }

  return (
    <div className='not-found '>
      <h1>Page Not Found</h1>
      <button className='go-back' onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

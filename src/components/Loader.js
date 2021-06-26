import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import '../styles/Loader.css';

const LoaderScreen = ({delay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [delay])

  return show ? (
    // <div className='loader__screen'>
    //   <Loader type="pacman" active />
    // </div>
    'loading...'
  ) : null
};
export default LoaderScreen;


import React from 'react';
import '../styles/Error.css'

const Error = ({error}) => {
  return (
    <div className='error'>
      {
        error && (
          <div>
            {error.type === 403 ? (
              <p>
                Oh no, you hit the {' '}
                <a
                  href="https://developer.github.com/v3/rate_limit/"
                  target="_blank"
                  rel="noopener noreferrer">
                  rate limit.
                </a>
                ! try again later.
              </p>
            ) : error.type === 404 ? (
              <p>User not found!</p>
            ) : (
              <p>Oh no! Something went wrong Try again later!</p>
            )}
          </div>
        )
      }
    </div>
  );
};

export default Error;

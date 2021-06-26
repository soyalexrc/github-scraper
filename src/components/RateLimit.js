import React from 'react';
import '../styles/RateLimit.css';

const RateLimit = ({rateLimit}) => {
  return (
    <main className='rate__limit'>
      {rateLimit && (
        <div className='limit'>
          <div className='num'>
            {`${rateLimit.remaining} / ${rateLimit.limit}`}
          </div>
          <p>requests Left</p>
        </div>
      )

      }
    </main>
  );
};

export default RateLimit;

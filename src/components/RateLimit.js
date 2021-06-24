import React from 'react';

const RateLimit = ({rateLimit}) => {
  return (
    <div>
      {rateLimit && (
        <div>
          <div>
            {`${rateLimit.remaining} / ${rateLimit.limit}`}
          </div>
          <p>requests Left</p>
        </div>
      )

      }
    </div>
  );
};

export default RateLimit;

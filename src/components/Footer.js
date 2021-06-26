import React from 'react';
import 'Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <span>Built with</span>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React.js
        </a>
        &middot;
        <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">
          Chart.js
        </a>
        &middot;
        <a
          href="https://github.com/IonicaBizau/node-gh-polyglot"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Polyglot
        </a>
        &middot;
        <a
          href="https://github.com/joshwcomeau/react-flip-move"
          target="_blank"
          rel="noopener noreferrer">
          React Flip Move
        </a>
        and more!
      </div>
    </footer>
  );
};

export default Footer;

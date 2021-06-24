import React from 'react';
import '../styles/Graph.css'

const Graph = ({ name, size, id, langChartError }) => {
  return (
    <div className='graph'>
      <header>
        <h2>{name}</h2>
      </header>
      <div className="graph-container">
        {langChartError && <p>Nothing to see here...</p>}
        <canvas id={id} width={size} height={size}>
        </canvas>
      </div>
    </div>
  );
};

export default Graph;

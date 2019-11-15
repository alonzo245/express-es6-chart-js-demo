import React from 'react';
import Graph from './components//Graph/Graph';
import './App.css'

const App = () => {
  if (!Graph) return <div>Loading...</div>

  return (
    <div className="graphWrapper">
      <h1>New York, New York City Rain Weather Report</h1>
      <Graph />
    </div>
  );
}

export default App;

import React from 'react';
import TimePeriods from '@/components/timePeriods/TimePeriods';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <TimePeriods data={data} />
    </div>
  );
}

export default App;

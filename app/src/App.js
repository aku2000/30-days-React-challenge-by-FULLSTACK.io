import React from 'react';
import './Timeline.css';
import './Clock.css';
import Timeline from './Components/timeline';
import Clock from './Components/clock';
function App()
{
  return (
    <div>
      <Timeline />
      <Clock />
    </div>
  );
}

export default App;

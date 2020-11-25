import React from 'react';
import './Stylesheets/Timeline.css'
import './Stylesheets/Clock.css';
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

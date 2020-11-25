import React from 'react';
import './Stylesheets/Timeline.css'
import './Stylesheets/Clock.css';
import Timeline from './Components/timeline';
import Clock from './Components/clock';
import MouseMover from './Components/mouseMover';
function App()
{
  return (
    <div>
      <Timeline />
      <Clock />
      <MouseMover />
    </div>
  );
}

export default App;

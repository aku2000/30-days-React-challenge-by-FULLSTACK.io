import React from 'react';
import './Stylesheets/Timeline.css'
import './Stylesheets/Clock.css';
import Timeline from './Components/timeline';
import Clock from './Components/clock';
import MouseMover from './Components/mouseMover';
import PureComponents from './Components/pureComponents';
function App()
{
  return (
    <div>
      <Timeline />
      <Clock />
      <MouseMover />
      <PureComponents message="good morning!!" />
    </div>
  );
}

export default App;

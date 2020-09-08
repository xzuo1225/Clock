import React, {useState} from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();


  const[Ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(updateTime, 1000);
  return (
    <div className = "center"> 
      <h1>London Clock</h1>
      <h1>{time}</h1>
    </div>
  )
}

export default App;

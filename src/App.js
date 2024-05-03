import React from 'react';
import './App.css';
import AssignmentBulb from './components/Assignment-Bulb';
import { AssignmentOddEven } from './components/Assignment-OddEven';

function App() {

  return (
    <div className="App App-header">
      <AssignmentBulb />
      <br />
      <br />
      <AssignmentOddEven />
    </div>
  );
}

export default App;

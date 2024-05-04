import React from 'react';
import './App.css';
import AssignmentBulb from './components/Assignment-Bulb';
import { AssignmentOddEven } from './components/Assignment-OddEven';
import { AssignmentWeek } from './components/Assignment-Week';
//import {Workings} from './components/workings';

function App() {

  return (
    <div className="App App-header">
      <AssignmentBulb />
      <br />
      <br />
      <AssignmentOddEven />
      <br />
      <br />
      <AssignmentWeek />
    </div>
  );
}

export default App;

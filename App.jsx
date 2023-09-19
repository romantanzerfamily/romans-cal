import React from 'react';
import Calendar from './components/Calendar';

import './style.css';

function App() {
  const days = [];
  var dt = new Date();
  while (dt.getDay() != 1) {
    dt.setDate(dt.getDate() - 1);
  }

  var start_date = dt;
  days.push(start_date);
  var occurences = 20;
  for (let i = 1; i <= occurences; i++) {
    var repeat_every = i; //repeat every number of days/weeks/months
    var last = new Date(start_date);
    days.push(last);
    last.setDate(last.getDate() + repeat_every);
  }

  return (
    <div className="app">
      <Calendar key={1} days={days} />
    </div>
  );
}

export default App;

import React from 'react';
import Week from './Week';

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};



const today = new Date();

// get week number of current date
const weekFrom = today.getWeek();
const weeks = [weekFrom, weekFrom + 1, weekFrom + 2];

function Calendar(props) {
  const today = new Date();
  return (
    <div className="calendar">
      {weeks.map(function (week, index) {
        return <Week key={index} number={week} year={today.getFullYear()} />;
      })}
    </div>
  );
}

export default Calendar;

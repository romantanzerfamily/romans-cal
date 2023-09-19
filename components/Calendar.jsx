import React from 'react';
import Day from './Day';

function Calendar(props) {
  const days = props.days;
  return (
    <div className="calendar">
      {days.map((day) => {
        return <Day day={day} />;
      })}
    </div>
  );
}

export default Calendar;

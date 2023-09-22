import React from 'react';

function Day(props) {
  const day = new Date(props.day);

  return <div className="day">{day.getDate()}</div>;
}

export default Day;

import React from 'react';

function Day(props) {
  return <div>{props.day.toLocaleDateString('en-GB')}</div>;
}

export default Day;

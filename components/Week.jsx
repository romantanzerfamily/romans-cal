import React from 'react';
import Day from './Day';
/* show the week of the date (props.day)
 */

function getDateOfWeek(week, y) {
  var d = new Date('Jan 01, ' + y + ' 01:00:00');
  var dayMs = 24 * 60 * 60 * 1000;
  var offSetTimeStart = dayMs * (d.getDay() - 1);
  var w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart; //reducing the offset here
  var n1 = new Date(w);
  var n2 = new Date(w + 518400000);
  return {
    dateFrom: n1,
    dateTo: n2,
  };
}
Date.prototype.addDays = function (days) {
  const date = this;
  const d2 = date.getDate() + days;
  date.setDate(d2);
  return date;
};

function Week(props) {
  const monday = getDateOfWeek(props.number, 2023).dateFrom;

  return (
    <div className="week">
      <div className="weekheader">{props.number}</div>
      <Day day={monday} />
      <Day day={monday.addDays(1)} />
      <Day day={monday.addDays(2)} />
      <Day day={monday.addDays(3)} />
      <Day day={monday.addDays(4)} />
      <Day day={monday.addDays(5)} />
      <Day day={monday.addDays(6)} />
    </div>
  );
}

export default Week;

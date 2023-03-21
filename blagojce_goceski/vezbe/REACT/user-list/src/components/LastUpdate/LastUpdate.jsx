import React, { useEffect, useState } from "react";

const LastUpdate = () => {
  // Last update LocalStorage in miliseconds
  const updateTime = localStorage.getItem("lastUpdate");
  // Date since January 1, 1970 in miliseconds
  const mytime = new Date().getTime();
  // Difference = From Last Update
  const diff = (mytime - updateTime) / 1000; // In seconds
  const days = (diff / 60 / 60 / 24).toFixed(0); // Days from last update
  const hours = ((diff % (60 * 60 * 24)) / 60 / 60).toFixed(0); // Hours from last update
  const minutes = (((diff % (60 * 60 * 24)) % 3600) / 60).toFixed(0); // Minutes from last update

  const [daysState, setDaysState] = useState(days);
  const [hoursState, setHoursState] = useState(hours);
  const [minutesState, setMinutesState] = useState(minutes);

  useEffect(() => {
    setDaysState(days);
    setHoursState(hours);
    setMinutesState(minutes);
  }, [mytime]);

  return (
    <>
      <h6>
        Last update:{" "}
        {daysState > 0
          ? `${daysState} days ${hoursState} hours ${minutesState} minutes `
          : hoursState > 0
          ? `${hoursState} hours ${minutesState} minutes `
          : minutesState > 1
          ? `${minutesState} minutes `
          : `${minutesState} minute `}
        ago
      </h6>
    </>
  );
};

export default LastUpdate;

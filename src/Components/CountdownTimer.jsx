import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the initial time (15 hours, 21 minutes, 46 seconds, 08 milliseconds)
  const initialTime = {
    hours: 15,
    minutes: 21,
    seconds: 46,
    milliseconds: 8,
  };

  // State to store the remaining time
  const [time, setTime] = useState(initialTime);

  // Function to update the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds, milliseconds } = prevTime;

        // Decrease milliseconds
        if (milliseconds > 0) {
          milliseconds -= 1;
        } else {
          milliseconds = 99; // Reset milliseconds
          if (seconds > 0) {
            seconds -= 1;
          } else {
            seconds = 59; // Reset seconds
            if (minutes > 0) {
              minutes -= 1;
            } else {
              minutes = 59; // Reset minutes
              if (hours > 0) {
                hours -= 1;
              } else {
                // Timer ends
                clearInterval(interval);
                return { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
              }
            }
          }
        }

        return { hours, minutes, seconds, milliseconds };
      });
    }, 10); // Update every 10 milliseconds (for smoother countdown)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <span>{String(time.hours).padStart(2, "0")}</span> :
      <span>{String(time.minutes).padStart(2, "0")}</span> :
      <span>{String(time.seconds).padStart(2, "0")}</span> :
      <span>{String(time.milliseconds).padStart(2, "0")}</span>
    </div>
  );
};

export default CountdownTimer;
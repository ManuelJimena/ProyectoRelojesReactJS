import "./DigitalClock.css"
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect (() => {
    setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

    return(
        <div className="digital-clock">
            <h2 className="material-symbols-outlined">schedule</h2>
                <span>{clockState}</span>
        </div>
    );
};

export default DigitalClock;
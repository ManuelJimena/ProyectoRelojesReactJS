import "./Countdown.css";
import { useState, useEffect } from "react";

const Countdown = () => {
    const [time, setTime] = useState("");
  
    useEffect(() => {
      let countDownDate = new Date("Jul 26, 2025 00:00:00").getTime();
      let intervalId = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        
        if (distance < 0) {
          clearInterval(intervalId);
          setTime("Happy Birtday 🥳");
        }
      }, 1000);
      
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="countdown">
        <h2 className="material-symbols-outlined">today</h2>
            <span>{time}</span>
      </div>
    );
  };
  
  export default Countdown;
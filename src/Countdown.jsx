import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2025-02-09T15:30:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="circle">
            <span>{timeLeft.days}</span>
          </div>
          <p>días</p>
        </div>
        <div className="countdown-item">
          <div className="circle">
            <span>{timeLeft.hours}</span>
          </div>
          <p>horas</p>
        </div>
        <div className="countdown-item">
          <div className="circle">
            <span>{timeLeft.minutes}</span>
          </div>
          <p>minutos</p>
        </div>
        <div className="countdown-item">
          <div className="circle">
            <span>{timeLeft.seconds}</span>
          </div>
          <p>segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

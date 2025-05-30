import { useState, useEffect } from 'react';

export function useTimer() {
  const [duration, setDuration] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setSessions(prev => [...prev, {
        timestamp: new Date().toISOString(),
        isManual: false
      }]);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    if (isActive && timeLeft < duration) {
      setSessions(prev => [...prev, {
        timestamp: new Date().toISOString(),
        isManual: true
      }]);
    }
    setIsActive(false);
    setTimeLeft(duration);
  };

  return {
    duration,
    timeLeft,
    isActive,
    sessions,
    handleStartPause,
    handleReset,
    setDuration,
    setTimeLeft,
    setSessions
  };
}
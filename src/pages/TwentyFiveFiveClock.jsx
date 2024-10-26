import React, { useState, useEffect } from 'react';

const TwentyFiveFiveClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session"); // Track if it's in session or break mode

  // Update timeLeft when sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  // Countdown and switch between session/break
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      if (mode === "Session") {
        setMode("Break");
        setTimeLeft(breakLength * 60);
      } else {
        setMode("Session");
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [isRunning, timeLeft, mode, breakLength, sessionLength]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartPause = () => setIsRunning((prev) => !prev);

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setMode("Session");
  };

  const handleBreakDecrement = () => setBreakLength((prev) => Math.max(1, prev - 1));
  const handleBreakIncrement = () => setBreakLength((prev) => Math.min(60, prev + 1));
  const handleSessionDecrement = () => setSessionLength((prev) => Math.max(1, prev - 1));
  const handleSessionIncrement = () => setSessionLength((prev) => Math.min(60, prev + 1));

  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-lg p-4 rounded-3xl border space-y-8'>
        <h1 className='text-center'>25 + 5 Clock</h1>

        <div className='flex justify-evenly items-center border'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 id="break-label">Break Length</h3>
            <div className='flex items-center gap-2 border border-red-500 rounded-lg'>
              <button onClick={handleBreakDecrement} className='px-3 border rounded-l-lg py-1' id="break-decrement">-</button>
              <span id="break-length" className='px-4'>{breakLength}</span>
              <button onClick={handleBreakIncrement} className='px-3 border rounded-r-lg py-1' id="break-increment">+</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 id="session-label">Session Length</h3>
            <div className='flex items-center gap-2 border border-red-500 rounded-lg'>
              <button onClick={handleSessionDecrement} className='px-3 border rounded-l-lg py-1' id="session-decrement">-</button>
              <span id="session-length" className='px-4'>{sessionLength}</span>
              <button onClick={handleSessionIncrement} className='px-3 border rounded-r-lg py-1' id="session-increment">+</button>
            </div>
          </div>
        </div>

        <div className='border p-4 flex flex-col items-center justify-center'>
          <h3 id="timer-label">{mode}</h3>
          <h1 id="time-left" className='font-semibold text-6xl'>{formatTime(timeLeft)}</h1>
          <button id='start_stop' onClick={handleStartPause} className='mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white'>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button id='reset' onClick={handleReset} className='mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white'>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwentyFiveFiveClock;

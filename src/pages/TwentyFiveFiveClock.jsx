import React, { useState, useEffect, useRef } from 'react';

const TwentyFiveFiveClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session");
  const audioRef = useRef(null);

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
      if (audioRef.current) {
        audioRef.current.play();
      }

      const nextMode = mode === "Session" ? "Break" : "Session";
      const nextTime = nextMode === "Session" ? sessionLength * 60 : breakLength * 60;

      setTimeout(() => {
        setMode(nextMode);
        setTimeLeft(nextTime);
        setIsRunning(true); // Start the next countdown
      }, 2000); // Wait for 2 seconds before starting the next session/break

      setIsRunning(false); // Stop the timer immediately
    }
  }, [isRunning, timeLeft, mode, breakLength, sessionLength]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false); // Stop any running timer
    setBreakLength(5); // Reset break length to 5
    setSessionLength(25); // Reset session length to 25
    setTimeLeft(25 * 60); // Reset time left to default (25 minutes in seconds)
    setMode("Session"); // Reset mode to Session
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio
    }
  };

  const handleBreakDecrement = () => setBreakLength((prev) => Math.max(1, prev - 1));
  const handleBreakIncrement = () => setBreakLength((prev) => Math.min(60, prev + 1));
  const handleSessionDecrement = () => setSessionLength((prev) => Math.max(1, prev - 1));
  const handleSessionIncrement = () => setSessionLength((prev) => Math.min(60, prev + 1));

  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-lg p-4 rounded-3xl border border-indigo-500/10 shadow-xl shadow-indigo-600/5 space-y-8'>
        <h1 className='text-center text-gray-800 font-semibold mt-3'>25 + 5 Clock</h1>
        <div className='flex justify-evenly items-center'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <p id="break-label" className='text-gray-700'>Break Length</p>
            <div className='flex items-center border border-indigo-500/20 rounded-lg'>
              <button onClick={handleBreakDecrement} className='px-3 rounded-l-lg py-1 hover:bg-indigo-500/10 transition duration-300 ease-in-out focus:ring-2 ring-indigo-300 z-10' id="break-decrement">-</button>
              <span id="break-length" className='px-4 border-x'>{breakLength}</span>
              <button onClick={handleBreakIncrement} className='px-3 rounded-r-lg py-1 hover:bg-indigo-500/10 transition duration-300 ease-in-out focus:ring-2 ring-indigo-300 z-10' id="break-increment">+</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <p id="session-label" className='text-gray-700'>Session Length</p>
            <div className='flex items-center border border-indigo-500/20 rounded-lg'>
              <button onClick={handleSessionDecrement} className='px-3 rounded-l-lg py-1 hover:bg-indigo-500/10 transition duration-300 ease-in-out focus:ring-2 ring-indigo-300 z-10' id="session-decrement">-</button>
              <span id="session-length" className='px-4 border-x'>{sessionLength}</span>
              <button onClick={handleSessionIncrement} className='px-3 rounded-r-lg py-1 hover:bg-indigo-500/10 transition duration-300 ease-in-out focus:ring-2 ring-indigo-300 z-10' id="session-increment">+</button>
            </div>
          </div>
        </div>
        <div className='p-4 flex flex-col items-center justify-center space-y-2'>
          <h3 id="timer-label" className='text-gray-700'>{mode}</h3>
          <h1 id="time-left" className='font-semibold text-6xl text-gray-800'>{formatTime(timeLeft)}</h1>
          <div className='flex items-center gap-4 pt-8'>
            <button id='start_stop' onClick={handleStartPause} className='bg-indigo-500 px-4 py-2 rounded-md text-white'>
              {isRunning ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button id="reset" onClick={handleReset} className='bg-indigo-500/10 px-4 py-2 rounded-md text-indigo-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <p className='text-center text-xs text-gray-700'>Crafted with <span className='text-indigo-500'>
          ♥</span> by Frederick Moreno</p>
        <audio id="beep" ref={audioRef} src="https://www.soundjay.com/buttons/sounds/beep-01a.mp3" />
      </div>
    </div>
  );
};

export default TwentyFiveFiveClock;

import React, { useState } from 'react'

const TwentyFiveFiveClock = () => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-lg p-4 rounded-3xl border space-y-8'>
        <h1 className='text-center'>25 + 5 Clock</h1>
        <div className='flex justify-evenly items-center border'>
          {/* Break Length */}
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 id="break-label">Break Length</h3>
            <div className='flex items-center gap-2 border border-red-500 rounded-lg'>
              <button className='px-3 border rounded-l-lg py-1' id="break-decrement">-</button>
              <span id="break-length" className='px-4'>{breakLength}</span>
              <button className='px-3 border rounded-r-lg py-1' id="break-increment">+</button>
            </div>
          </div>
          {/* Session Length */}
          <div className='flex flex-col justify-center items-center gap-3'>
            <h3 id="session-label">Session Length</h3>
            <div className='flex items-center gap-2 border border-red-500 rounded-lg'>
              <button className='px-3 border rounded-l-lg py-1' id="session-decrement">-</button>
              <span id="session-length" className='px-4'>{sessionLength}</span>
              <button className='px-3 border rounded-r-lg py-1' id="session-increment">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwentyFiveFiveClock

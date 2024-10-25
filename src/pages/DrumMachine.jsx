import React, { useEffect, useState } from 'react';

const DrumMachine = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const mediaElements = document.querySelectorAll('audio');
    mediaElements.forEach((element) => {
      element.muted = !isChecked;
    });
  }, [isChecked]);


  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [displayText, setDisplayText] = useState('');

  const playSound = (event) => {
    const audio = event.currentTarget.firstChild;
    audio.currentTime = 0; // This line resets the audio playback to the start
    audio.play();
    setDisplayText(event.currentTarget.id); // Set the display text to the id of the clicked div
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    let audio;
    let text;
    switch (key) {
      case 'Q':
        audio = document.getElementById('Q');
        text = 'Heater 1';
        break;
      case 'W':
        audio = document.getElementById('W');
        text = 'Heater 2';
        break;
      case 'E':
        audio = document.getElementById('E');
        text = 'Heater 3';
        break;
      case 'A':
        audio = document.getElementById('A');
        text = 'Heater 4';
        break;
      case 'S':
        audio = document.getElementById('S');
        text = 'Clap';
        break;
      case 'D':
        audio = document.getElementById('D');
        text = 'Open HH';
        break;
      case 'Z':
        audio = document.getElementById('Z');
        text = "Kick n' Hat";
        break;
      case 'X':
        audio = document.getElementById('X');
        text = 'Kick';
        break;
      case 'C':
        audio = document.getElementById('C');
        text = 'CLose HH';
        break;
      default:
        return; // Exit the function if the key is not handled
    }
    audio.currentTime = 0;
    audio.play();
    setDisplayText(text);
  };

  // Add the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {/* <h1 className='text-slate-700 text-5xl text-center font-bold'>Test</h1> */}
      <div id='drum-machine' className='flex bg-slate-500 p-7 rounded-lg shadow-lg'>
        <div className='gap-4 grid grid-cols-3 w-full max-w-[30rem]'>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Heater 1' onClick={playSound}>
            <audio className='clip' id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            Q
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Heater 2' onClick={playSound}>
            <audio className='clip' id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Heater 3' onClick={playSound}>
            <audio className='clip' id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Heater 4' onClick={playSound}>
            <audio className='clip' id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Clap' onClick={playSound}>
            <audio className='clip' id='S' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Open HH' onClick={playSound}>
            <audio className='clip' id='D' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id="Kick n' Hat" onClick={playSound}>
            <audio className='clip' id='Z' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Kick' onClick={playSound}>
            <audio className='clip' id='X' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div className='flex items-center justify-center py-8 px-2 text-slate-800 font-bold rounded active:bg-slate-400 cursor-pointer bg-slate-300' id='Close HH' onClick={playSound}>
            <audio className='clip' id='C' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 pl-8 w-[5rem] lg:w-[30rem]'>
          {/* On/Off Toggle */}
          <label className="flex flex-col items-center cursor-pointer gap-2">
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="sr-only peer" />
            <h1 className='text-slate-200 font-medium text-md'>Power</h1>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
          </label>
          {/* Display Container */}
          <div className="bg-slate-200 w-[8rem] h-12 flex items-center justify-center rounded-md font-bold" id='display'>
            {displayText}
          </div>
          {/* Volume Slider */}
          <input
            id="large-range"
            type="range"
            value={value}
            onChange={handleChange}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer range-lg accent-slate-200"
          />
        </div>
      </div>
    </div>
  )
}

export default DrumMachine

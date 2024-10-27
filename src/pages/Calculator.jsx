import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [formula, setFormula] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(formula).toString(); // Calculate the result
        setDisplay(result);
      } catch (error) {
        setDisplay('Error'); // Handle invalid formula input
        setFormula('');
      }
    } else if (value === 'C') {
      setDisplay('');
      setFormula('');
    } else {
      setFormula(formula + value); // Add value to the formula
      setDisplay(value); // Display the current button press
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-lg p-4 rounded-3xl border border-indigo-500/10 shadow-xl shadow-indigo-600/5 space-y-8'>
        <h2 className='text-sm text-gray-600'>{formula || '0'}</h2> {/* Formula Screen */}
        <h2>{display || '0'}</h2>
        <button className='p-4 border' onClick={() => handleClick('1')}>1</button>
        <button className='p-4 border' onClick={() => handleClick('+')}>+</button>
        <button className='p-4 border' onClick={() => handleClick('1')}>1</button>
        <button className='p-4 border' onClick={() => handleClick('=')}>=</button>
        <button className='p-4 border' onClick={() => handleClick('C')}>C</button> {/* Clear Button */}
      </div>
    </div>
  );
};

export default Calculator;

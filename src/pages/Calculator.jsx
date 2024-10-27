import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [formula, setFormula] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(formula).toString(); // Calculate the result
        setDisplay(result);
        setFormula(result); // Optionally set result as new formula
      } catch (error) {
        setDisplay('Error'); // Handle invalid formula input
        setFormula('');
      }
    } else if (value === 'C') {
      setDisplay(''); // Clear display
      setFormula(''); // Clear formula
    } else if (['+', '-', '*', '/'].includes(value)) {
      // On operator click, update formula and show only the operator
      setFormula(formula + value);
      setDisplay(value);
    } else {
      // For numbers and decimals, prevent multiple leading zeros and multiple decimals
      const updatedFormula = formula + value;

      // Check for the last number in the formula to ensure no multiple decimals
      const lastNumber = formula.split(/[\+\-\*\/]/).pop(); // Get last number based on the last operator
      const canAddDecimal = value === '.' ? !lastNumber.includes('.') : true;

      const newDisplay = (display === "0" && value === "0")
        ? "0"
        : (display === "0" && value !== "." && value !== "C")
          ? value
          : (['+', '-', '*', '/'].includes(display))
            ? value
            : (canAddDecimal || value !== ".")
              ? display + value
              : display;

      setFormula(updatedFormula);
      setDisplay(newDisplay);
    }
  };




  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-lg p-4 rounded-3xl border border-indigo-500/10 shadow-xl shadow-indigo-600/5 space-y-8'>
        <h2 className='text-sm text-gray-600'>{formula || '0'}</h2> {/* Formula Screen */}
        <h2 id='display'>{display || '0'}</h2>
        <button id='zero' className='p-4 border' onClick={() => handleClick('0')}>0</button>
        <button id='one' className='p-4 border' onClick={() => handleClick('1')}>1</button>
        <button id='two' className='p-4 border' onClick={() => handleClick('2')}>2</button>
        <button id='three' className='p-4 border' onClick={() => handleClick('3')}>3</button>
        <button id='four' className='p-4 border' onClick={() => handleClick('4')}>4</button>
        <button id='five' className='p-4 border' onClick={() => handleClick('5')}>5</button>
        <button id='six' className='p-4 border' onClick={() => handleClick('6')}>6</button>
        <button id='seven' className='p-4 border' onClick={() => handleClick('7')}>7</button>
        <button id='eight' className='p-4 border' onClick={() => handleClick('8')}>8</button>
        <button id='nine' className='p-4 border' onClick={() => handleClick('9')}>9</button>
        <button id='decimal' className='p-4 border' onClick={() => handleClick('.')}>.</button>
        <button id='add' className='p-4 border' onClick={() => handleClick('+')}>+</button>
        <button id='multiply' className='p-4 border' onClick={() => handleClick('*')}>x</button>
        <button id='subtract' className='p-4 border' onClick={() => handleClick('-')}>-</button>
        <button id='divide' className='p-4 border' onClick={() => handleClick('/')}>/</button>
        <button id="equals" className='p-4 border' onClick={() => handleClick('=')}>=</button>
        <button id='clear' className='p-4 border' onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;

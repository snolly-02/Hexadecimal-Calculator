import React, { useState } from 'react';
import './App.css';

function HexCalc() {
  const [display, setDisplay] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [isSecondInput, setIsSecondInput] = useState(false);
  const [error, setError] = useState('');

  const hexButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const operationSymbols = {
    '+': 'add',
    '-': 'subtract',
    '×': 'multiply',
    '÷': 'divide'
  };

  const handleHexClick = (val) => {
    setError('');
    if (!isSecondInput) {
      const newValue = (firstValue + val).slice(0, 2);
      setFirstValue(newValue);
      setDisplay(newValue);
    } else {
      const newValue = (secondValue + val).slice(0, 2);
      setSecondValue(newValue);
      setDisplay(newValue);
    }
  };

  const handleOperation = (symbol) => {
    if (firstValue === '') {
      setError('Enter a hex value first');
      return;
    }
    setOperation(operationSymbols[symbol]);
    setIsSecondInput(true);
    setDisplay(symbol);
  };

  const handleClear = () => {
    setDisplay('');
    setFirstValue('');
    setSecondValue('');
    setOperation('');
    setResult('');
    setIsSecondInput(false);
    setError('');
  };

  const calculate = () => {
    try {
      let calculatedResult;
      const a = parseInt(firstValue, 16);
      const b = parseInt(secondValue, 16);
      switch (operation) {
        case 'add':
          calculatedResult = a + b;
          break;
        case 'subtract':
          calculatedResult = a - b;
          break;
        case 'multiply':
          calculatedResult = a * b;
          break;
        case 'divide':
          if (b === 0) throw new Error('Division by zero');
          calculatedResult = Math.floor(a / b);
          break;
        default:
          return;
      }
      const finalResult = calculatedResult.toString(16).toUpperCase().padStart(4, '0');
      setResult(finalResult);
      setDisplay(finalResult);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Hex Calculator</h1>
      <div className="screen">{display || '0'}</div>
      {error && <div className="error-message">{error}</div>}
      <div className="button-grid">
        {hexButtons.map((btn) => (
          <button key={btn} onClick={() => handleHexClick(btn)}>{btn}</button>
        ))}
        <button className="op" onClick={() => handleOperation('+')}>+</button>
        <button className="op" onClick={() => handleOperation('-')}>-</button>
        <button className="op" onClick={() => handleOperation('×')}>×</button>
        <button className="op" onClick={() => handleOperation('÷')}>÷</button>
        <button className="equals" onClick={calculate}>=</button>
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default HexCalc;

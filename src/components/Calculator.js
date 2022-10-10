import '../stylesheets/Calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtonClear from './CalculatorButtonClear';
import { useState } from 'react';
import { evaluate, sqrt, pow, factorial } from 'mathjs';

function Calculator() {
  const [inputCalculator, setInputCalculator] = useState('');
  const maxCharInputCalculator = 20;

  const addInput = (value) => {
    // Button Clear
    if (value === 'Clear') {
      setInputCalculator('');
    // Not allow to click more than once in an operator
    } else if (/[*+-/]$/.test(value) && /[*+-/]$/.test(inputCalculator)) {
      return;
    // Not allow to repeat zeros on the left.
    } else if (value == 0 && (/^[0]/.test(inputCalculator) && !(/[.]/g.test(inputCalculator)))){
      return;
    // Not allow to begin with zero.
    } else if (/[1-9]/.test(value) && inputCalculator == '0') {
      return;
    // If everything is ok, concat the value to inputCalculator
    } else if (inputCalculator.length < maxCharInputCalculator) {
      setInputCalculator(inputCalculator + value);
    } else {
      return;
    }
  };
  const equalFunction = () => {
    if (inputCalculator) {
      console.log(typeof evaluate(inputCalculator));
      setInputCalculator(evaluate(inputCalculator));
    }
  };
  const sqRoot = () => {
    if (inputCalculator) {
      setInputCalculator(sqrt(evaluate(inputCalculator.toString())));
    } else {
      return;
    }
  };
  const powTo = (p) => {
    if (inputCalculator) {
      setInputCalculator(pow(evaluate(inputCalculator.toString()), p));
    } else {
      return;
    }
  };
  const factorialFrom = () => {
    if (inputCalculator && inputCalculator > 0) {
      setInputCalculator(factorial(evaluate(inputCalculator.toString())));
    } else {
      alert('The number must be more than zero');
    }
  };

  return (
    <>
      <div className='container' id='calculator'>
        <div className='title'>
          <h1>CALCULATOR</h1>
        </div>
        <div className='container-calculator'>
          <CalculatorScreen inputCalculator={inputCalculator} />
          <div className='calculator-row'>
            <CalculatorButton handleClick={addInput}>1</CalculatorButton>
            <CalculatorButton handleClick={addInput}>2</CalculatorButton>
            <CalculatorButton handleClick={addInput}>3</CalculatorButton>
            <CalculatorButton handleClick={addInput}>+</CalculatorButton>
            <CalculatorButton handleClick={sqRoot}>√</CalculatorButton>
          </div>
          <div className='calculator-row'>
            <CalculatorButton handleClick={addInput}>4</CalculatorButton>
            <CalculatorButton handleClick={addInput}>5</CalculatorButton>
            <CalculatorButton handleClick={addInput}>6</CalculatorButton>
            <CalculatorButton handleClick={addInput}>-</CalculatorButton>
            <CalculatorButton handleClick={(p) => powTo(2)}>
              X&#178;
            </CalculatorButton>
          </div>
          <div className='calculator-row'>
            <CalculatorButton handleClick={addInput}>7</CalculatorButton>
            <CalculatorButton handleClick={addInput}>8</CalculatorButton>
            <CalculatorButton handleClick={addInput}>9</CalculatorButton>
            <CalculatorButton handleClick={addInput}>*</CalculatorButton>
            <CalculatorButton handleClick={(p) => powTo(3)}>
              X&#179;
            </CalculatorButton>
          </div>
          <div className='calculator-row'>
            <CalculatorButton handleClick={equalFunction}>=</CalculatorButton>
            <CalculatorButton handleClick={addInput}>0</CalculatorButton>
            <CalculatorButton handleClick={addInput}>.</CalculatorButton>
            <CalculatorButton handleClick={addInput}>/</CalculatorButton>
            <CalculatorButton handleClick={factorialFrom}>X!</CalculatorButton>
          </div>

          <div className='calculator-row'>
            <CalculatorButtonClear handleClick={addInput}>
              Clear
            </CalculatorButtonClear>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;

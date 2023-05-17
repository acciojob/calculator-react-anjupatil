import React ,{useState} from 'react';


const Calculator = () => {

    const [result, setResult] = useState('');
    const handleClick = (value) => {
        setResult(result + value);
      };

      const calculateResult = () => {
        try {
          setResult(eval(result));
        } catch (error) {
          setResult('Error');
        }
      };

      const clearResult = () => {
        setResult('');
      };
  return (
    <div className='Calculator'>
    <div>Calculator</div>
    <input type="text" name="" id="" value={result} readOnly />
    <div className='btns'>
        <button id='btn-1' onClick={() => handleClick('1')}>1</button>
        <button id='btn-2' onClick={() => handleClick('2')}>2</button>
        <button id='btn-3' onClick={() => handleClick('3')}>3</button>
        <button id='btn-4' onClick={() => handleClick('4')}>4</button>
        <button id='btn-5' onClick={() => handleClick('5')}>5</button>
        <button id='btn-6' onClick={() => handleClick('6')}>6</button>
        <button id='btn-7'  onClick={() => handleClick('7')}>7</button>
        <button id='btn-8' onClick={() => handleClick('8')}>8</button>
        <button id='btn-9' onClick={() => handleClick('9')}>9</button>
        <button id='btn-0' onClick={() => handleClick('0')}>0</button>
        <button id='plus' onClick={() => handleClick('+')}>+</button>
        <button id='minus' onClick={() => handleClick('-')}>-</button>
        <button id='multiply' onClick={() => handleClick('*')}>*</button>
        <button id='division' onClick={() => handleClick('/')}>/</button>
        <button id='equal' onClick={calculateResult}>=</button>
        <button id='clear' onClick={clearResult}>Clear</button>
    

    </div>
    </div>
  )
}

export default Calculator;
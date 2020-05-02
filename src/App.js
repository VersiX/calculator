import React from 'react';
import './App.css';
import './calculator-modules/calculator.css';
import CalculatorTop from './calculator-modules/calculator-head';
import Display from './calculator-modules/calculator-display';
import Numpad from './calculator-modules/calculator-numpad';

function App() {
  return (
    <div className="App">
      <div className="calc">
        <CalculatorTop />
        <Display />
        <Numpad />


      </div>
    </div>
  );
}

export default App;

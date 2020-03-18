import React from 'react';

function CalculatorBtn (props){
console.log(props)
  return(
  <button onClick={() => props.handleCalculator(props.num)}>{props.num}</button>
  );

}

export default CalculatorBtn;
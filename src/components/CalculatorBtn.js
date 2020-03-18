import React from 'react';

function CalculatorBtn (props){

  return(
  <button className="btn btn-primary" onClick={() => props.handleCalculator(props.num)}>{props.num}</button>
  );

}

export default CalculatorBtn;
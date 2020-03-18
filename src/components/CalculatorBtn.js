import React from 'react';

function CalculatorBtn (props){
console.log(props)
  return(
  <button>{props.num}</button>
  );

}

export default CalculatorBtn;
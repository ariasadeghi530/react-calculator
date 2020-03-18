import React, {Component} from 'react';
import CalculatorBtn from './components/CalculatorBtn';


class App extends Component{
  
  state = {
    numOne: '',
    numTwo: '',
    op: '',
    result: ''
  }

  createNumbers = () => {
    let buttons = [];
    for(let i = 0; i < 10; i++){
      buttons.push(<CalculatorBtn num={i}/>)
    }
    return buttons;
  }
  createOps = () => {
    let ops = ['+', '-', '*', '/', '='];
    let opsBtns = [];
    for(let i = 0; i < ops.length; i++){
      opsBtns.push(<CalculatorBtn num={ops[i]} />)
    }
    return opsBtns;
  }

  render(){
   return(
     <div>
       <h1>Num1: {this.state.numOne}</h1>
       <h1>Num2: {this.state.numTwo}</h1>
   <h1>Operator: {this.state.op}</h1>
   <h1>Result: {this.state.op}</h1>
    {this.createNumbers()}
    <br />
    <br />
    {this.createOps()}

     </div>
   );
  }
  
}

export default App;

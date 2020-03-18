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
      buttons.push(<CalculatorBtn handleCalculator={this.handleCalculator} num={i}/>);
    }
    return buttons;
  }
  createOps = () => {
    let ops = ['+', '-', '*', '/', '=', 'RESET'];
    let opsBtns = [];
    for(let i = 0; i < ops.length; i++){
      opsBtns.push(<CalculatorBtn handleCalculator={this.handleCalculator} num={ops[i]} />);
    }
    return opsBtns;
  }

  handleNumOne = (nums) => {
    this.setState({numOne: this.state.numOne + nums});
  }

  handleNumTwo = (nums) => {
    this.setState({numTwo: this.state.numTwo + nums});
  }

  handleOp = (oper) => {
    this.setState({op: oper});
  } 
  handleResult = () =>{
    let finalRes;
    switch (this.state.op) {
      case'+':
        finalRes = Number(this.state.numOne) + Number(this.state.numTwo);
        break;
      case '-':
        finalRes = Number(this.state.numOne) - Number(this.state.numTwo);
        break;
      case '*':
        finalRes = Number(this.state.numOne) * Number(this.state.numTwo);
        break;
      case '/':
        finalRes = Number(this.state.numOne) / Number(this.state.numTwo);
        break;
      default:
        break;
    }
    this.setState({result: finalRes});
  }

  handleCalculator = (value) =>{
    
    if(typeof value == 'number' && this.state.op === ''){
      this.handleNumOne(value);
    }
    if(typeof value == 'number' && this.state.op !== ''){
      this.handleNumTwo(value);
    }
    if(value === '+' || value === '-' || value === '*' || value === '/' ){
      this.handleOp(value);
    }
    if (value === '=' && this.state.numOne !== '' && this.state.numTwo !== ''){
      this.handleResult();
    }
    if(value === 'RESET'){
      this.setState({numOne: '', numTwo: '', op: '', result: ''});
    }
  }

  render(){
   return(
     <div>
       <h1>Num1: {this.state.numOne}</h1>
       <h1>Num2: {this.state.numTwo}</h1>
       <h1>Operator: {this.state.op}</h1>
       <h1>Result: {this.state.result}</h1>
    {this.createNumbers()}
    <br />
    <br />
    {this.createOps()}

     </div>
   );
  }
  
}

export default App;

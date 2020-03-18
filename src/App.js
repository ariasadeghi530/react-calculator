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

  render(){
   return(
     <div>
       <h1>Num1: {this.state.numOne}</h1>
       <h1>Num2: {this.state.numTwo}</h1>
    {this.createNumbers()}
     </div>
   );
  }
  
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    textContent: 'QWERTY'
  }

  updateText = (event) => {
    const flexText = event.target.value;
    this.setState({
      textContent: flexText
    });
  }

  deleteChar = (index) => {
    const modTextArr = [...this.state.textContent];
    modTextArr.splice(index, 1);
    const modText = modTextArr.join('');

    this.setState({
      textContent: modText
    });

  }

  render() {

    const singleChar = this.state.textContent.split('').map((char, index) => {
      return (
        <Char 
          key={index}
          character={char}
          clicked={() => this.deleteChar(index)}
        />
        )
    });

    return (
      <div className="App">
        <input type="text" onChange={this.updateText} value={this.state.textContent}></input>
        <p>{this.state.textContent}</p>
        <Validation 
          textLength={this.state.textContent.length}
        />
        {singleChar}
      </div>
    );
  }

}


export default App;

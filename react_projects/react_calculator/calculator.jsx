import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    e.preventDefault();
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  reset(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: ""});
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input type="text" value={num1} onChange={this.setNum1}/>
        <input type="text"value={num2} onChange={this.setNum2}/>
        <button onClick={this.reset}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.multiply}>*</button>
      </div>
    );
  }
}

export default Calculator;

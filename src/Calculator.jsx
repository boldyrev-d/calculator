import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Keyboard from './Keyboard';

const Wrapper = styled.div`
  width: 470px;
  height: 600px;
  font-size: 48px;
  font-family: monospace;
  border: 1px solid #8d8d8d;
  border-radius: 10px;
  background-color: #e0e0e0;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px #aaa;
`;

class Calculator extends Component {
  state = {
    currentValue: '0',
    buffer: null,
    currentOperator: null,
    waitingOperand: false,
  };

  setOperator = (operator) => {
    if (this.state.currentOperator !== operator && this.state.waitingOperand) {
      this.setState({
        currentOperator: operator,
      });

      return;
    }

    if (this.state.currentOperator !== null) this.calculate();

    if (this.state.buffer === null) {
      this.setState({
        buffer: parseFloat(this.state.currentValue),
      });
    }

    this.setState({
      currentOperator: operator,
      waitingOperand: true,
    });
  };

  calculate = () => {
    let result;
    switch (this.state.currentOperator) {
      // eslint-disable-next-line no-case-declarations
      case '+':
        result = this.state.buffer + parseFloat(this.state.currentValue);
        break;
      case '-':
        result = this.state.buffer - parseFloat(this.state.currentValue);
        break;
      case '*':
        result = this.state.buffer * parseFloat(this.state.currentValue);
        break;
      case '/':
        result = this.state.buffer / parseFloat(this.state.currentValue);
        break;

      default:
        break;
    }

    this.setState({
      buffer: result,
      currentValue: String(result),
    });
  };

  resetState = () => {
    this.setState({
      currentValue: '0',
      buffer: null,
      currentOperator: null,
      waitingOperand: false,
    });
  };

  handleDigitClick = (digit) => {
    if (this.state.waitingOperand) {
      this.setState({
        currentValue: String(digit),
        waitingOperand: false,
      });
    } else {
      this.setState({
        currentValue:
          this.state.currentValue === '0' ? String(digit) : this.state.currentValue + digit,
      });
    }
  };

  inputDot = () => {
    if (!/\./.test(this.state.currentValue)) {
      this.setState({
        currentValue: `${this.state.currentValue}.`,
        waitingOperand: false,
      });
    }
  };

  toggleSign = () => {
    this.setState({
      currentValue: String(parseFloat(this.state.currentValue) * -1),
    });
  };

  render() {
    return (
      <Wrapper>
        <Display value={this.state.currentValue} />
        <Keyboard
          resetState={this.resetState}
          handleDigitClick={this.handleDigitClick}
          setOperator={this.setOperator}
          inputDot={this.inputDot}
          calculate={this.calculate}
          toggleSign={this.toggleSign}
        />
      </Wrapper>
    );
  }
}

export default Calculator;

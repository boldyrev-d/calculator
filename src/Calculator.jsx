import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Keyboard from './Keyboard';

const Wrapper = styled.div`
  width: 470px;
  height: 600px;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #8d8d8d;
  border-radius: 10px;
  background-color: #e0e0e0;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px #aaa;
`;

const operations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
};

class Calculator extends Component {
  state = {
    displayValue: '0',
    buffer: null,
    currentOperator: null,
    waitingOperand: false,
  };

  setOperator = (operator) => {
    const { buffer, displayValue, currentOperator, waitingOperand } = this.state;

    if (currentOperator !== operator && waitingOperand) {
      this.setState({
        currentOperator: operator,
      });

      return;
    }

    if (buffer == null) {
      this.setState({
        buffer: parseFloat(displayValue),
      });
    } else if (currentOperator) {
      const currentValue = buffer || 0;
      const newValue = operations[currentOperator](currentValue, parseFloat(displayValue));

      this.setState({
        buffer: newValue,
        displayValue: String(newValue),
      });
    }

    this.setState({
      waitingOperand: true,
      currentOperator: operator,
    });
  };

  clearAll = () => {
    this.setState({
      displayValue: '0',
      buffer: null,
      currentOperator: null,
      waitingOperand: false,
    });
  };

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
    });
  };

  digitClick = (digit) => {
    const { waitingOperand, displayValue } = this.state;

    if (waitingOperand) {
      this.setState({
        displayValue: String(digit),
        waitingOperand: false,
      });
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  };

  inputDot = () => {
    const { displayValue } = this.state;

    if (!/\./.test(displayValue)) {
      this.setState({
        displayValue: `${displayValue}.`,
        waitingOperand: false,
      });
    }
  };

  toggleSign = () => {
    const { displayValue } = this.state;
    const newDisplayValue = parseFloat(displayValue) * -1;

    this.setState({
      displayValue: String(newDisplayValue),
    });
  };

  render() {
    const { displayValue } = this.state;
    const isDisplayClear = displayValue === '0';

    return (
      <Wrapper>
        <Display displayValue={displayValue} />
        <Keyboard
          isDisplayClear={isDisplayClear}
          clearDisplay={this.clearDisplay}
          clearAll={this.clearAll}
          digitClick={this.digitClick}
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

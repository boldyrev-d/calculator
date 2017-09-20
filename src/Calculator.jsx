/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';

const Calc = styled.div`
  width: 400px;
  height: 500px;
  font-size: 48px;
  font-family: monospace;
  border: 1px solid #8d8d8d;
  border-radius: 10px;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 25%;
  cursor: pointer;
  // border: 1px solid #888;
  // box-sizing: border-box;
`;

const Button = (props) => {
  const { title, handleClick } = props;
  return <ButtonStyled onClick={handleClick}>{title}</ButtonStyled>;
};

const DigitButton = (props) => {
  const { digit, handleClick } = props;

  return (
    <Button
      handleClick={() => {
        handleClick(digit);
      }}
      title={digit}
    />
  );
};

class Calculator extends Component {
  state = {
    currentValue: 0,
    currentOperator: false,
    buffer: 0,
  };

  setOperator = (operator) => {
    if (this.state.currentOperator !== false) this.calculate();

    this.setState({
      currentOperator: operator,
    });
  };

  calculate = () => {
    if (this.state.buffer === 0) {
      this.setState({
        buffer: this.state.currentValue,
      });
    } else {
      switch (this.state.currentOperator) {
        // eslint-disable-next-line no-case-declarations
        case '+':
          const result = +this.state.buffer + +this.state.currentValue;
          this.setState({
            buffer: result,
            currentValue: result,
          });
          break;

        default:
          break;
      }
    }
  };

  resetState = () => {
    this.setState({
      currentValue: 0,
    });
  };

  handleDigitClick = (digit) => {
    this.setState({
      currentValue:
        this.state.currentValue === 0 || this.state.currentOperator
          ? digit
          : this.state.currentValue + digit,
    });
  };

  render() {
    return (
      <Calc>
        <Display value={this.state.currentValue} />
        <Buttons>
          <Button title="AC" handleClick={this.resetState} />
          <DigitButton digit="7" handleClick={this.handleDigitClick} />
          <DigitButton digit="8" handleClick={this.handleDigitClick} />
          <DigitButton digit="9" handleClick={this.handleDigitClick} />
          <Button title="+" handleClick={() => this.setOperator('+')} />
          <DigitButton digit="4" handleClick={this.handleDigitClick} />
          <DigitButton digit="5" handleClick={this.handleDigitClick} />
          <DigitButton digit="6" handleClick={this.handleDigitClick} />
          <DigitButton title="" />
          <DigitButton digit="1" handleClick={this.handleDigitClick} />
          <DigitButton digit="2" handleClick={this.handleDigitClick} />
          <DigitButton digit="3" handleClick={this.handleDigitClick} />
          <DigitButton title="" />
          <DigitButton digit="0" handleClick={this.handleDigitClick} />
        </Buttons>
      </Calc>
    );
  }
}

export default Calculator;

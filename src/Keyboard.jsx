import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, DigitButton } from './Buttons';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Keyboard = (props) => {
  const { resetState, handleDigitClick, setOperator, inputDot, calculate, toggleSign } = props;

  return (
    <Wrapper>
      <Button color="#d6d6d6" value="AC" handleClick={resetState} />
      <Button
        color="#d6d6d6"
        value="+/-"
        handleClick={() => {
          toggleSign();
        }}
      />
      <Button color="#d6d6d6" value="%" handleClick={() => {}} />
      <Button
        color="#ea9749"
        value="/"
        handleClick={() => {
          setOperator('/');
        }}
      />
      <DigitButton value="7" handleClick={handleDigitClick} />
      <DigitButton value="8" handleClick={handleDigitClick} />
      <DigitButton value="9" handleClick={handleDigitClick} />
      <Button
        color="#ea9749"
        value="*"
        handleClick={() => {
          setOperator('*');
        }}
      />
      <DigitButton value="4" handleClick={handleDigitClick} />
      <DigitButton value="5" handleClick={handleDigitClick} />
      <DigitButton value="6" handleClick={handleDigitClick} />
      <Button
        color="#ea9749"
        value="-"
        handleClick={() => {
          setOperator('-');
        }}
      />
      <DigitButton value="1" handleClick={handleDigitClick} />
      <DigitButton value="2" handleClick={handleDigitClick} />
      <DigitButton value="3" handleClick={handleDigitClick} />
      <Button color="#ea9749" value="+" handleClick={() => setOperator('+')} />
      <DigitButton isWide value="0" handleClick={handleDigitClick} />
      <Button value="," handleClick={inputDot} />
      <Button
        color="#ea9749"
        value="="
        handleClick={() => {
          calculate();
        }}
      />
    </Wrapper>
  );
};

Keyboard.propTypes = {
  resetState: PropTypes.func.isRequired,
  handleDigitClick: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  inputDot: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
  toggleSign: PropTypes.func.isRequired,
};

export default Keyboard;

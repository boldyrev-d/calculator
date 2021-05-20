import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, DigitButton } from './Buttons';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Keyboard = ({
  isDisplayClear,
  clearDisplay,
  clearAll,
  digitClick,
  setOperator,
  inputDot,
  toggleSign,
}) => (
  <Wrapper>
    <Button
      bgColor="#d6d6d6"
      value={isDisplayClear ? 'AC' : 'C'}
      handleClick={isDisplayClear ? clearAll : clearDisplay}
    />
    <Button
      bgColor="#d6d6d6"
      value="±"
      handleClick={() => {
        toggleSign();
      }}
    />
    <Button bgColor="#d6d6d6" value="%" handleClick={() => {}} />
    <Button
      bgColor="#ea9749"
      color="#fff"
      value="÷"
      handleClick={() => {
        setOperator('/');
      }}
    />
    <DigitButton value="7" handleClick={digitClick} />
    <DigitButton value="8" handleClick={digitClick} />
    <DigitButton value="9" handleClick={digitClick} />
    <Button
      bgColor="#ea9749"
      color="#fff"
      value="×"
      handleClick={() => {
        setOperator('*');
      }}
    />
    <DigitButton value="4" handleClick={digitClick} />
    <DigitButton value="5" handleClick={digitClick} />
    <DigitButton value="6" handleClick={digitClick} />
    <Button
      bgColor="#ea9749"
      color="#fff"
      value="—"
      handleClick={() => {
        setOperator('-');
      }}
    />
    <DigitButton value="1" handleClick={digitClick} />
    <DigitButton value="2" handleClick={digitClick} />
    <DigitButton value="3" handleClick={digitClick} />
    <Button
      bgColor="#ea9749"
      color="#fff"
      value="+"
      handleClick={() => setOperator('+')}
    />
    <DigitButton isWide value="0" handleClick={digitClick} />
    <Button value="," handleClick={inputDot} />
    <Button
      bgColor="#ea9749"
      color="#fff"
      value="="
      handleClick={() => {
        setOperator('=');
      }}
    />
  </Wrapper>
);

Keyboard.propTypes = {
  isDisplayClear: PropTypes.bool.isRequired,
  clearDisplay: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
  digitClick: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
  inputDot: PropTypes.func.isRequired,
  toggleSign: PropTypes.func.isRequired,
};

export default Keyboard;

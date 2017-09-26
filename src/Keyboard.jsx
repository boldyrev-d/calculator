import React from 'react';
import styled from 'styled-components';
import { Button, DigitButton } from './Buttons';
// import DigitButton from './DigitButton';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Keyboard = (props) => {
  const { resetState, handleDigitClick, setOperator } = props;

  return (
    <Wrapper>
      <Button color="#d6d6d6" value="AC" handleClick={resetState} />
      <Button color="#d6d6d6" value="+/-" handleClick={() => {}} />
      <Button color="#d6d6d6" value="%" handleClick={() => {}} />
      <Button color="#ea9749" value="/" handleClick={() => {}} />
      <DigitButton value="7" handleClick={handleDigitClick} />
      <DigitButton value="8" handleClick={handleDigitClick} />
      <DigitButton value="9" handleClick={handleDigitClick} />
      <Button color="#ea9749" value="*" handleClick={() => {}} />
      <DigitButton value="4" handleClick={handleDigitClick} />
      <DigitButton value="5" handleClick={handleDigitClick} />
      <DigitButton value="6" handleClick={handleDigitClick} />
      <Button color="#ea9749" value="-" handleClick={() => {}} />
      <DigitButton value="1" handleClick={handleDigitClick} />
      <DigitButton value="2" handleClick={handleDigitClick} />
      <DigitButton value="3" handleClick={handleDigitClick} />
      <Button color="#ea9749" value="+" handleClick={() => setOperator('+')} />
      <DigitButton isWide value="0" handleClick={handleDigitClick} />
      <Button value="." handleClick={() => {}} />
      <Button color="#ea9749" value="=" handleClick={() => {}} />
    </Wrapper>
  );
};

export default Keyboard;

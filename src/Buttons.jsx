import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  display: flex;
  justify-content: ${props => (props.isWide ? 'flex-start' : 'center')};
  align-items: center;
  box-sizing: border-box;
  padding-left: ${props => (props.isWide ? '45px' : '0px')};
  flex-basis: ${props => (props.isWide ? '50%' : '25%')};
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  color: ${props => (props.color ? props.color : 'inherit')};
  min-height: 90px;
  cursor: pointer;
  // border: 1px solid #888;
`;

export const Button = ({ value, handleClick, isWide, bgColor, color }) => (
  <ButtonStyled isWide={isWide} bgColor={bgColor} color={color} onClick={handleClick}>
    {value}
  </ButtonStyled>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isWide: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  isWide: false,
  bgColor: '',
  color: '',
};

export const DigitButton = ({ value, handleClick, isWide, bgColor, color }) => (
  <Button
    isWide={isWide}
    bgColor={bgColor}
    color={color}
    value={value}
    handleClick={() => {
      handleClick(value);
    }}
  />
);

DigitButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isWide: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

DigitButton.defaultProps = {
  isWide: false,
  bgColor: '',
  color: '',
};

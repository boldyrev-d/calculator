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
  background-color: ${props => (props.color ? props.color : 'transparent')};
  min-height: 86px;
  cursor: pointer;
  // border: 1px solid #888;
`;

export const Button = (props) => {
  const { value, handleClick, isWide, color } = props;

  return (
    <ButtonStyled isWide={isWide} color={color} onClick={handleClick}>
      {value}
    </ButtonStyled>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isWide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  isWide: false,
  color: '',
};

export const DigitButton = (props) => {
  const { value, handleClick, isWide, color } = props;

  return (
    <Button
      isWide={isWide}
      color={color}
      value={value}
      handleClick={() => {
        handleClick(value);
      }}
    />
  );
};

DigitButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isWide: PropTypes.bool,
  color: PropTypes.string,
};

DigitButton.defaultProps = {
  isWide: false,
  color: '',
};

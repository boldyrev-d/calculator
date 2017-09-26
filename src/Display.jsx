import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DisplayStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.2em;
  height: 25%;
  color: #fff;
  background-color: #4c4c4c;
  // font-size: 0.8em;
`;

const Display = (props) => {
  const { value } = props;

  return <DisplayStyled>{value}</DisplayStyled>;
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;

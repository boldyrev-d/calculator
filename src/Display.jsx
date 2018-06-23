/* eslint-disable react/no-did-update-set-state */

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 25%;
  transform-origin: right;
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5em;
  font-weight: 100;
  color: #fff;
  background-color: #4c4c4c;
`;

const Text = styled.div`
  padding: 0 0.3em;
  position: absolute;
  right: 0;
  transform-origin: right;
  transform: ${({ transform }) => transform};
`;

class Display extends Component {
  static propTypes = {
    displayValue: PropTypes.string.isRequired,
  };

  state = {
    scale: 1,
  };

  componentDidUpdate() {
    const { scale } = this.state;
    const { parentNode } = this.node;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = this.node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { scale } = this.state;
    const { displayValue } = this.props;

    return (
      <Wrapper>
        <Text
          transform={`scale(${scale},${scale})`}
          innerRef={(node) => {
            this.node = node;
          }}
        >
          {displayValue}
        </Text>
      </Wrapper>
    );
  }
}

export default Display;

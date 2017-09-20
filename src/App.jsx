/* eslint-disable 
react/prefer-stateless-function, 
jsx-a11y/no-noninteractive-element-interactions, 
no-console */

import React, { Component } from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Calculator />
      </Wrapper>
    );
  }
}

export default App;

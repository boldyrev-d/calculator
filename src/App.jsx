import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <Calculator />
  </Wrapper>
);

export default App;

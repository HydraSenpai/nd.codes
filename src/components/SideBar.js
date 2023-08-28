import React from 'react';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.section`
  position: fixed;
  background-color: #1c1c1c;
  z-index: 100;
  height: 100vh;
  width: 100vw;
`;

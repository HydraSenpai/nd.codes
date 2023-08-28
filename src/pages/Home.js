import React from 'react';
import {
  Navbar,
  Landing,
  About,
  Projects,
  Contact,
  SideBar,
} from '../components/';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='content'>
      {/* <SideBar /> */}
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-family: 'Barlow', Arial, Helvetica, sans-serif;
  color: white;
`;

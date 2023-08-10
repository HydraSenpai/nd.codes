import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <h1>ND.CODES</h1>
        <div className='links'>
          <a href='#' className='link'>
            Home
          </a>
          <a href='#about' className='link'>
            About
          </a>
          <a href='#projects' className='link'>
            Projects
          </a>
          <a href='#contact' className='link'>
            Contact
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  nav {
    width: 100%;
    height: 100px;
    background-color: transparent;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  h1 {
    font-size: 2.75em;
    font-weight: 300;
    margin-left: 1em;
  }
  .links {
    display: flex;
    gap: 4em;
    margin-right: 5em;
  }
  .link {
    text-decoration: none;
    color: white;
    font-size: 1.75em;
    font-weight: 300;
    transition: all 500ms;
  }
  .link:hover {
    color: #b3b3b3;
    transform: scale(1.1);
  }
  @media (max-width: 950px) {
    .links {
      gap: 3em;
    }
    .link {
      font-size: 1.5em;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import classs from '../assets/classessment.png';
import ndcodes from '../assets/ndcodes.png';

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <div className='container'>
        <h1 className='title'>Projects</h1>
        <div className='card card1'>
          <img src={classs} className='top-pic' />
          <div className='textarea'>
            <h2 className='class-title title'>Classessment</h2>
            <p>
              Classessment is a class statistic checker. Keeps track of test
              scores and displays data and graphs to the user in a clear and
              informative way.
            </p>
            <p>Language: React + NodeJs</p>
            <a
              href='https://github.com/HydraSenpai/Classessment'
              className='btn'
            >
              Git page
            </a>
          </div>
        </div>
        <div className='card card2'>
          <img src={ndcodes} className='top-pic' />
          <div className='textarea'>
            <h2 className='title card-title'>ND.CODES</h2>
            <p className='desc'>
              This is my personal portfolio website built in React.
            </p>
            <p>Language: React</p>
            <a href='https://github.com/HydraSenpai/nd.codes' className='btn'>
              Git Page
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  height: 120vh;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 50%;
    height: 65%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 100px;
    grid-row-gap: 50px;
  }
  .class-title {
    font-size: 2.5em;
    grid-area: 1 / 1 / 2 / 3;
  }
  .card {
    background-color: #353535;
    height: 600px;
    width: 400px;
    border-radius: 30px;
  }
  .top-pic {
    width: 100%;
    height: 40%;
  }
  .textarea {
    padding: 0.75em 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .card-title {
    font-size: 2.5em;
    height: 1.25em;
  }
  .textarea > p {
    font-weight: 300;
    font-size: 1.5em;
  }
  .desc {
    height: 6em;
  }
  .card1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .card2 {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

// .div4 { grid-area: 3 / 1 / 4 / 2; }
// .div5 { grid-area: 3 / 2 / 4 / 3; }

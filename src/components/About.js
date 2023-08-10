import React from 'react';
import styled from 'styled-components';
import beach from '../assets/beach.png';

const About = () => {
  return (
    <Wrapper id='about'>
      <div className='card'>
        <div className='sections'>
          <img src={beach} className='profile' />
          <div className='text'>
            <h2 className='title'>About Me</h2>
            <p>
              I am a 3rd year Computer Science student from Glasgow, Scotland. I
              specialise in creating smooth, user-friendly websites and systems.
              I enjoy learning and the full development process in which I
              always put my 100% effort into.
            </p>
            <p>
              I’ve written web and a few application based programs mainly in
              React + NodeJs, Java and C. I design using Figma and GIMP. I also
              use other technologies and languages for personal projects.
            </p>
            <p>
              When I’m not sat at my computer I usually spend my time with my
              cat, at the gym or travelling.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 60%;
    height: 65%;
    background-color: #353535;
    border-radius: 50px;
  }
  .sections {
    display: flex;
    padding: 3em;
    gap: 8%;
  }
  .profile {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    max-height: 505px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .text > p {
    font-size: 1.5em;
    font-weight: 200;
  }
`;

import React from 'react';
import styled from 'styled-components';
import beach from '../assets/beach.png';

const About = () => {
  return (
    <Wrapper id='about'>
      <div className='card'>
        <div className='sections'>
          <div className='image'>
            <img src={beach} className='profile' />
          </div>
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
    display: grid;
    align-items: start;
    justify-content: start;
    grid-template-columns: 30% 1fr;
    grid-column-gap: 80px;
    padding: 3em;
  }
  .profile {
    height: 100%;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }
  .text > p {
    font-size: 1.5em;
    font-weight: 200;
  }

  @media (max-width: 1600px) {
    .card {
      width: 70%;
    }
    .sections {
      grid-template-columns: 30% 1fr;
    }
    .profile {
      width: 300px;
      height: auto;
    }
    .text > p {
      font-size: 1.4em;
    }
  }
  @media (max-width: 1450px) {
    .card {
      height: 52%;
    }
    .sections {
      grid-template-columns: 200px 1fr;
    }
    .profile {
      width: 250px;
      height: auto;
    }
    .text > p {
      font-size: 1.3em;
    }
  }
  @media (max-width: 1200px) {
    .card {
      width: 85%;
      height: 50%;
    }
    .sections {
      grid-template-columns: 150px 1fr;
    }
    .profile {
      width: 200px;
      height: auto;
    }
    .text > p {
      font-size: 1.3em;
    }
  }
  @media (max-width: 900px) {
    .card {
      height: 90%;
      width: 80%;
    }
    .sections {
      display: grid;
      /* justify-content: center; */
      align-items: center;
      grid-template-columns: 1fr;
      grid-column-gap: 80px;
      padding: 3em;
    }
  }
`;

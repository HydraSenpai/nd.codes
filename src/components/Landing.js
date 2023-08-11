import React from 'react';
import styled from 'styled-components';
import bgcircles from '../assets/landingcircles1.png';
import pic from '../assets/landingprofile.png';

const Landing = () => {
  return (
    <Wrapper>
      <img src={bgcircles} className='bg' />
      <section className='content'>
        <div className='text'>
          <h2 className='hey'>Heya!</h2>
          <h1 className='intro'>
            I’m Nicholas Daly, a Fullstack Developer & Designer
          </h1>
          <h4 className='desc'>
            Scottish based student and fullstack developer focused on clean and
            creative designs
          </h4>
          <div className='findme'>Find me:</div>
          <div className='buttons'>
            <a href='#' className='button'>
              Download CV
            </a>
            <a href='#' className='button'>
              Email Me
            </a>
          </div>
        </div>
        <img src={pic} className='profile' />
      </section>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  .content {
    height: 80vh;
    background-color: #1c1c1c;
    overflow-x: hidden;
  }
  .bg {
    position: absolute;
    z-index: 0;
    left: -80px;
    bottom: 0;
    object-fit: contain;
    object-position: left;
    user-select: none;
    pointer-events: none;
  }
  .profile {
    position: absolute;
    z-index: 0;
    left: 45%;
    top: 10%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }
  .text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 15%;
    padding-left: 15%;
    z-index: 1;
  }
  .hey {
    font-weight: 300;
    font-size: 2.5em;
  }
  .intro {
    font-weight: 500;
    font-size: 3em;
    width: 40%;
    line-height: 1.1;
    margin-bottom: 0.25em;
  }
  .desc,
  .findme {
    font-weight: 200;
    font-size: 1.5em;
    width: 42%;
    margin-bottom: 1em;
  }
  .buttons {
    display: flex;
    gap: 1em;
  }
  .button {
    background-color: #105c87;
    font-weight: 300;
    font-size: 25px;
    width: 200px;
    height: 57px;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: 'Barlow', Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms;
  }
  .button:hover {
    background-color: #0d4a6c;
    /* transform: scale(1.01); */
  }
  @media (max-width: 1400px) {
    .profile {
      left: 40%;
      width: 50%;
      top: 12%;
    }
  }
  @media (max-width: 1100px) {
    .bg {
      display: none;
    }
    .profile {
      /* left: 40%; */
      width: 55%;
      /* top: 12%; */
    }
  }
  @media (max-width: 695px) {
    .content {
      padding-top: 2em;
    }
    .intro {
      font-size: 2.5em;
      width: 60%;
      line-height: 1.1;
      margin-bottom: 0.5em;
    }
    .desc,
    .findme {
      font-size: 1.25em;
      width: 50%;
      margin-bottom: 1em;
    }
    .button {
      font-size: 20px;
      width: 150px;
      height: 45px;
    }
  }
  @media (max-width: 500px) {
    .content {
      padding-top: 3.5em;
    }
    .text {
      padding-left: 5%;
    }
    .hey {
      font-size: 2em;
    }
    .intro {
      font-size: 2.25em;
      width: 70%;
      line-height: 1.1;
      margin-bottom: 0.5em;
    }
    .desc,
    .findme {
      font-size: 1.25em;
      width: 80%;
      margin-bottom: 1em;
    }
    .button {
      font-size: 18px;
      width: 140px;
      height: 40px;
    }
  }
`;

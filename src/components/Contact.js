import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [messageDetails, setMessageDetails] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = messageDetails;
    if (!name || !message || !message) {
      console.log('missing value');
      return;
    }
    sendEmail(name, email, message);
  };

  const handleChange = (e) => {
    setMessageDetails({ ...messageDetails, [e.target.name]: e.target.value });
  };

  const sendEmail = (name, email, message) => {
    let link =
      'mailto:2nicholasdaly@gmail.com' +
      '&subject=' +
      encodeURIComponent(name + email + ' wants to connect from nd.codes') +
      '&body=' +
      encodeURIComponent(message);
    window.open(link);
  };

  return (
    <Wrapper id='contact'>
      <div className='card'>
        <div className='sections'>
          <div className='contact'>
            <h1 className='title'>Get in Touch!</h1>
            <div className='links'>
              <a href='https://github.com/HydraSenpai'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/nicholas-daly-775a91196/'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/_nicholas_daly/'>
                <FaInstagram />
              </a>
            </div>
          </div>
          <form className='inputs' onSubmit={handleSubmit}>
            <input
              type='text'
              className='input'
              placeholder='Name'
              name='name'
              value={messageDetails.name}
              onChange={handleChange}
            />
            <input
              type='text'
              className='input'
              placeholder='Email'
              name='email'
              value={messageDetails.email}
              onChange={handleChange}
            />
            <textarea
              className='input'
              placeholder='Message'
              maxLength='150'
              name='message'
              value={messageDetails.message}
              onChange={handleChange}
            />
            <button className='btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: end;
  .card {
    width: 60%;
    height: 65%;
    background-color: #353535;
    border-radius: 50px;
    margin-bottom: 5%;
  }
  .sections {
    display: flex;
    padding: 5em 5em 5em 5em;
    gap: 8%;
    height: 75%;
  }
  .contact {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    gap: 1em;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 60%;
  }
  .text > p {
    font-size: 1.5em;
    font-weight: 200;
  }
  textarea {
    font-size: 2.25em;
    height: 50%;
    padding: 0.5em 0.75em;
    resize: none;
  }
  .links {
    display: flex;
    font-size: 3em;
    gap: 0.1em;
  }
  .links > a {
    text-decoration: none;
    color: white;
    transition: all 500ms;
  }
  .links > a:hover {
    color: #b3b3b3;
    transform: scale(1.1);
  }
`;

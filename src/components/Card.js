import React from 'react';
import styled from 'styled-components';

const Card = ({ img, title, description, languages, link, linkText }) => {
  return (
    <Wrapper>
      <div className='card'>
        <img className='bg' src={img} />
        <div className='info'>
          <h2 className='subtitle'>{title}</h2>
          <p>{description}</p>
          <p>Languages: {languages}</p>
          <a href={link} className='btn'>
            {linkText}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  .card {
    border-radius: 5px;
    background-color: #353535;
    height: 350px;
    width: 350px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card:hover .bg {
    opacity: 0;
    pointer-events: none;
  }
  .info {
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 200px;
  }
  p {
    text-align: center;
    font-size: 1em;
    font-weight: 300;
  }
  .bg {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 500ms;
    position: absolute;
    opacity: 1;
    user-select: none;
  }
  .btn {
    font-size: 1.5em;
    height: 40px;
    width: 150px;
    justify-self: end;
  }
  @media (max-width: 500px) {
    .card {
      height: 300px;
      width: 300px;
    }
  }
`;

// .card {
//     background-color: #353535;
//     height: 600px;
//     width: 400px;
//     border-radius: 30px;
//   }
//   .top-pic {
//     width: 100%;
//     height: 40%;
//   }
//   .textarea {
//     padding: 0.75em 1.5em;
//     display: flex;
//     flex-direction: column;
//     gap: 1em;
//   }
//   .card-title {
//     font-size: 2.5em;
//     height: 1.25em;
//   }
//   .textarea > p {
//     font-weight: 300;
//     font-size: 1.5em;
//   }
//   .desc {
//     height: 6em;
//   }

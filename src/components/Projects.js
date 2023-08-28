import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import projectData from '../projects';

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <div className='container'>
        <h2 className='title'>Projects</h2>
        <div className='project-cards'>
          {projectData.map((project, index) => {
            const { img, title, description, languages, link, linkText } =
              project;
            return (
              <Card
                key={index}
                img={img}
                title={title}
                description={description}
                languages={languages}
                link={link}
                linkText={linkText}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  .container {
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .project-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
  }
`;

// .div4 { grid-area: 3 / 1 / 4 / 2; }
// .div5 { grid-area: 3 / 2 / 4 / 3; }

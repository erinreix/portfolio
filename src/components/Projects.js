import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import littlelemon from '../components/assets/littlelemon.jpg';
import car from '../components/assets/car.jpg';
import './Projects.css';

const projectsData = [
  {
    image: littlelemon,
    title: 'Little Lemon 🍋',
    author: 'Restaurant website',
    summary: 'A Mediterranean restaurant in Chicago.',
    link: 'https://little-lemon-erinreix.vercel.app/',
  },
  {
    image: car,
    title: 'Night',
    author: 'Website',
    summary: 'Navy-themed sample website that highlights the usage of CSS.',
    link: 'https://erinreix.github.io/Main-Project/',
  },
];

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleSectionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
  };

  return (
    <div className="container">
      <Heading as="h1" id="projects-section" textAlign="center" mb={8} color="#FFF">
        Featured Projects
      </Heading>
      <div className="center list flex-column">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`card flex-row ${openIndex === index ? 'open' : ''}`}
            onClick={() => handleSectionClick(index)}
          >
            <img src={project.image} className="book" />
            <div className="flex-column info">
              <div className="title">{project.title}</div>
              <div className="author">{project.author}</div>
              <div className="hidden bottom summary">{project.summary}</div>
            </div>
            <div className="hidden bottom">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="simple">Open in a new tab</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

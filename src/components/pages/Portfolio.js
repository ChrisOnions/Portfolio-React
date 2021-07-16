import React from 'react';
import Card from './portfoliCard';
import capture from './Capture.png'
const Projects = [
  {
    name: "item1",
    description: 'project1',
    image: capture,
    link: ''
  },
  {
    name: "item2",
    description: 'project2',
    image: 'project1.jpg',
    link: ''
  },
  {
    name: "item3",
    description: 'project3',
    image: 'project1.jpg',
    link: ''
  },
  {
    name: "item4",
    description: 'project4',
    image: 'project1.jpg',
    link: ''
  },
]

function Portfolio() {
  return (
    <div class='sizeContainerOne '>
      <h1>Portfolio</h1>
      <div  >
        {Projects.map((Projects) => (
          <Card name={Projects.name} description={Projects.description} image={Projects.image} link={Projects.link} />
        ))}
      </div>
    </div>
  )
}
export default Portfolio
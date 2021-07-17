import React from 'react';
import Card from './portfoliCard';
import Projects from './assets/projects.js'



function Portfolio() {
  return (
    <div>
      <h1 className='sizeContainerOne'>Portfolio</h1>
      <div className='dRow'  >
        {Projects.map((Projects) => (
          <Card name={Projects.name} description={Projects.description} image={Projects.image} link={Projects.link} />
        ))}
      </div>
    </div>
  )
}
export default Portfolio
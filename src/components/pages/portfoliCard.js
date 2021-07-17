import React from 'react';

export default function Card(props) {


  // Helper function that generates a random width for our placeholder images
  return (

    <div className='card '>
      <div >
        <img class='cardImg' src={props.image}
          alt="Cardcap" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          Link
        </a>
      </div>
    </div >
  );
}
import React from 'react';
import resumeImg from './Capture.png'



function Resume() {
  return (

    <div class='sizeContainerOne' >
      <div class='dFlex sBetween'>

        <div>
          <h1>Resume / Cv</h1>
          <h4>Skills</h4>
          <div>
            <ul> Computer Science applied to JavaScript</ul>
            <ul>Design Patterns</ul>
            <ul>Data Structures</ul>
            <ul>Algorithms</ul>
            <ul>Big O Notation</ul>
            <ul></ul>Browser Based Technologies
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>Responsive Design</ul>
            <ul>Bootstrap</ul>
            <ul>Handlebars</ul>
            <ul>Local Storage, Session Storage, IndexedDB</ul>
            <ul>React.js</ul>
          </div>
          <button>Download</button>
        </div>

        <img class='resume' src={resumeImg} alt="resume"></img>

      </div>
    </div>


  )
}
export default Resume;
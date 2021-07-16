import React from 'react';
import resumeImg from './Capture.png'


function Resume() {
  return (

    <div class='sizeContainerOne' >
      <div class='dFlex sBetween'>

        <div>
          <h1>Resume / Cv</h1>
          <button>Download</button>
        </div>
        <img class='resume' src={resumeImg} alt="resume"></img>

      </div>

    </div>

  )
}
export default Resume;
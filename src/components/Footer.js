import React from 'react';
import emailIcon from './pages/email.png';
import githubIcon from './pages/GitHub.png';
import linkedinIcon from './pages/Linkedin.png';

function Footer() {
  return (
    <div>

      {/* <div >
        <a class='backUp' href="#">^</a>
      </div> */}

      <footer >
        <div class='linkTreeIconsContainer'>
          <a href='/'>
            <img class='linkTreeIcons' src={linkedinIcon} alt="LinkedinLOGO"></img>
          </a>
          <a href='/'>
            <img class='linkTreeIcons' src={emailIcon} alt="EmailLOGO"></img>
          </a>
          <a href='/'>
            <img class='linkTreeIcons' src={githubIcon} alt="GithubLOGO"></img>
          </a>

        </div >
        Feet Go here
      </footer >
    </div >
  )
}

export default Footer;
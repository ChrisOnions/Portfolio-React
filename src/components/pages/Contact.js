import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../../utils/helper.js';

const style = {
  style: {
    minWidth: 500,
  },
  styles: {
    minHeight: 200,
    minWidth: 500,
  }
}

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div class='sizeContainerOne'>
      <h1>Contact Me</h1>
      <div class='formElements'>
        <form action="submit">
          <h4>Name</h4>
          <input style={style.style} class='formInput' type="text" placeholder='Name' onChange={handleInputChange} />

          <h4>Email</h4>
          <input value={email} style={style.style} class='formInput'
            type="text"
            placeholder='Email'
            onChange={handleInputChange}
          />
          <h4>Message</h4>
          <textarea style={style.styles} type="text" placeholder='Shoot us a message' onchange="{ }" onChange={handleInputChange} />

          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>


    </div>

  )
}
export default Contact;
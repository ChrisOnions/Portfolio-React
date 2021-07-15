import React from 'react';

function Contact() {

  return (
    <div class='sizeContainerOne'>
      <h1>Contact Me</h1>
      <div>
        <form action="submit">
          <h4>Name</h4>
          <input type="text" placeholder='Name' onchange="{}" />

          <h4>Email</h4>
          <input
            type="text"
            placeholder='Email'

            onchange="{}"
          />
          <h4>Message</h4>
          <input type="text" placeholder='Message' onchange="{}" />

          <button type="submit">Submit</button>
        </form>

      </div>

      <div>
        {/* Cards here  */}
        Cards here
      </div>
    </div>

  )
}
export default Contact;
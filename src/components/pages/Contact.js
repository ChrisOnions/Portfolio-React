import React from 'react';


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

  return (
    <div class='sizeContainerOne'>
      <h1>Contact Me</h1>
      <div class='formElements'>
        <form action="submit">
          <h4>Name</h4>
          <input style={style.style} class='formInput' type="text" placeholder='Name' onchange="{}" />

          <h4>Email</h4>
          <input style={style.style} class='formInput'
            type="text"
            placeholder='Email'

            onchange="{}"
          />
          <h4>Message</h4>
          <textarea style={style.styles} type="text" placeholder='Shoot us a message' onchange="{ }" />

          <button type="submit">Submit</button>
        </form>

      </div>


    </div>

  )
}
export default Contact;
import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h3>WE LOVE TO HEAR</h3>
      <div className="fields">
        <div className="field1">
            <div className="field-name">Name</div>
            <input type="text" />
        </div>
        <div className="field1">
        <div className="field-name">Email</div>
        <input type="text" />
        </div>
        <div className="field1">
        <div className="field-name">Subject</div>
        <input type="text" />
        </div>
      </div>
      <div className="textarea">
        <div className="field-name">Message</div>
        <textarea className='main-textarea' name="" id=""></textarea>
      </div>
      <div className="last-btn">
        <button>SEND MESSAGE</button>
      </div>
    </div>
  )
}

export default ContactForm

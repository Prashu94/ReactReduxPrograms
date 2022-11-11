import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <h2 className='text-info'>Get in touch with us</h2>
        <h3>We are open from 9:00 am to 9:00 pm all 7 days</h3><br/><br/>
        <h4>Or Contact Us at:</h4>
        <ul>
            <li>Email: xyz@library.com</li>
            <li>Patron Helo: +91 889900001</li>
        </ul>
      </div>
    )
  }
}

export default Contact;

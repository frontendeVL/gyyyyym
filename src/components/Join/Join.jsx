import React, { useState } from 'react'; 
import './Join.css';

const Join = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleFormSubmit = () => {
    setMessage('Your message has been sent successfully!');
    setMessageType('success');
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form
          className="email-container"
          action="https://formspree.io/f/manbobyp" 
          method="POST"
        >
          <input type="email" name='user_email' placeholder='Enter your email address' />
          <button type="submit" className='btn btn-j'>Join Now</button> {/* type="submit" важливий */}
        </form>
      </div>
    </div>
  );
}

export default Join;

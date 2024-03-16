import React from 'react';

import './SignUp.css'; // Import the SignUp.css file

import Typewriter from 'typewriter-effect'; // Import Typewriter
import profilePic from '../../images/profil.jpg'; // Adjust the path as necessary
import { Link } from 'react-router-dom'; // Make sure to import Link

function SignUp() {
  return (
    // Rename the class for the outer container to ensure clarity and proper style application
    <div className="sign-up-container"> {/* This container should have the shared background image */}
      <div className='sign-up-content'> {/* Adjusted class name for clarity */}
        <Typewriter
          options={{
            strings: ["Let's start a project together"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
     
      {/* Remove the individual background style from the Contact content for consistency */}
      <div name="contact" className="contact-container w-full min-h-screen p-4 text-white flex items-center justify-between">
        {/* Profile picture on the right */}
        <img src={profilePic} alt="Profile" className="profile-picture" />

        {/* Contact info horizontally */}
        <div className="contact-info flex-row">
          <h1 className="contact-title">Contact me</h1>
          {/* Each of these divs represents a block of contact information */}
          <div className="contact-details">
            <p>Email: <br /><span className="contact-text">erik@lycke.eu</span></p>
            <p>Phone: <br /><span className="contact-text">+46 727 5000 59</span></p>
          </div>
          <div className="business-details">
            <p>Address</p>
            <p>Kämnärsvägen 23F</p>
            <p>22646</p>
            <p>Lund, Sweden</p>
          </div>

          <small className='website-rights'>ERIK LYCKE © 2024</small> {/* Corrected 'class' to 'className' */}
          <div className='social-icons'> {/* Corrected 'class' to 'className' */}
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'> {/* Corrected 'class' to 'className' */}
              <i className='fab fa-facebook-f' /> {/* Corrected 'class' to 'className' */}
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'> {/* Corrected 'class' to 'className' */}
              <i className='fab fa-instagram' /> {/* Corrected 'class' to 'className' */}
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'> {/* Corrected 'class' to 'className' */}
              <i className='fab fa-youtube' /> {/* Corrected 'class' to 'className' */}
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'> {/* Corrected 'class' to 'className' */}
              <i className='fab fa-twitter' /> {/* Corrected 'class' to 'className' */}
            </Link>
            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'> {/* Corrected 'class' to 'className' and fixed duplicate 'twitter' className */}
              <i className='fab fa-linkedin' /> {/* Corrected 'class' to 'className' */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;



import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Send me a message below to get in touch!
        </p>
        <p className='footer-subscription-text'>
          (contact section below is not yet implemented, but will be soon!)
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Message'
            />
            <button type='submit' className='btn btn--outline'>Send</button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Portfolio</h2>
            <Link to='./Services'>Projects</Link>
            <Link to='/Products'>About Me</Link>
            <Link to='/blog'></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='./sign-up'>Get In Touch</Link>
            <Link to='./sign-up'>Hire Me</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Erik Lycke
              <i className='icon-custom' /> {/* Replace 'icon-custom' with your preferred icon */}
            </Link>
          </div>
          <small className='website-rights'>ERIK LYCKE © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <a
              className='social-icon-link github'
              href="https://github.com/eriklycke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link linkedin'
              href="https://linkedin.com/in/erik-lycke-5a55101b9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link facebook'
              href="https://facebook.com/erik.lycke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook' />
            </a>
            <a
              className='social-icon-link instagram'
              href="https://instagram.com/erik_lyckee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
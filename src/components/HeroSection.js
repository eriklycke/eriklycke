import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import backgroundImage from '../images/nature-7870374.jpg'; 

function HeroSection() {
  const navigateToURL = (url) => {
    window.location.href = url;
  };
  return (
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1>Erik Lycke - Developer Erik Lycke - Developer Erik Lycke - Developer Erik Lycke - Developer Erik Lycke - Developer Erik Lycke - Developer</h1>
      <p>Hej! My name is Erik, I'm a Informatics student @Lund University.</p>
      <p>This website is my digital portfolio and a project I have done over break.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
         

        >
          Discover My Portfolio
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

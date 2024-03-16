import React from 'react';
import './Cards.css';
import profilePic from '../images/profil.jpg'; // Corrected the typo 'profil.jpg' to 'profile.jpg' if it was a typo.
// Import your logos here, ensure the path is correct
import schoolLogo from '../images/800px-Höganäs_AB_logo.svg.png';
import workplaceLogo from '../images/lund-university-logo-7E5D6EC6C4-seeklogo.com.png';
import workplaceLogo2 from '../images/Axis_Communications_logo.svg.png';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__content'>
        <div className='cards__profile'>
          <img src={profilePic} alt='Profile' className='profile__image' />
        </div>
        <div className='cards__info'>
          <h1>Erik Lycke</h1>
          <h2>Informatics student</h2>
          <p>I will be a graduate of LUSEM class of 2024 and my passion is Software Development. My interests include software design and development and artificial intelligence.</p>
          <ul>
            <li>Teaching Assistant at the Institution of Informatics</li>
            <li>Bachelor of Science in Informations Systems from LUSEM</li>
            
            {/* More list items as needed */}
          </ul>
        </div>
      </div>
      <div className='cards__logos'>
        <img src={schoolLogo} alt='School Logo' className='logo__image'/>
        <img src={workplaceLogo} alt='Workplace Logo' className='logo__image'/>
        <img src={workplaceLogo2} alt='Workplace Logo' className='logo__image'/>
        {/* Add more logos as needed */}
      </div>
    </div>
  );
}

export default Cards;


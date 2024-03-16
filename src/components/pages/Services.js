import React from 'react';
import Footer from '../Footer';
import MyTimeline from '../MyTimeline';
import './Services.css';




function Services() {
  return (
    <div className="services-container"> {/* Use this class for background styling */}
      <div className="resume-header">
        <h1>My Journey</h1>
        <p>Below is my journey, both academic and proffesional. For more details visit my resume</p>
        <p>(Somewhat outdated, will update soon. student life is very busy!)</p>
      </div>
      <MyTimeline />
      <Footer />
    </div>
  );
}

export default Services;

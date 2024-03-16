import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <div className="skills-header">
        <h1>Skills</h1>
        <p>Below are some of my skills, and I'm always looking to learn more.</p>
        <p>(Somewhat outdated, will update soon. student life is very busy!)</p>
      </div>
      <div className="skills-row">
        <div className="skill-card">
          <div className="skill-icon">
            <span><i className="fas fa-c"></i></span>
            <span><i className="fas fa-hashtag"></i></span>
          </div>
          <h2>C#, .NET</h2>
          <p>I have over 2 years of software development experience in C# with the.NET framework, creating REST clients and various other applications.</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i className="fas fa-brain"></i></div>
          <h2>Researching the use of Generative AI on students</h2>
          <p>Currently doing my thesis work on Generative AI tools such as ChatGPT and GitHub CoPilot as its affect on developers</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i className="fab fa-java"></i></div>
          <h2>Java</h2>
          <p>I have over 3 years of software development experience in Java where I have created several applications incorporating technologies such as JavaFX, Swing, Ajax, Rest clients and much more.</p>
        </div>
      </div>
      <div className="skills-row">
        <div className="skill-card">
          <div className="skill-icon"><i className="fab fa-react"></i></div>
          <h2>React Development</h2>
          <p>Basic knowledge in front-end development having built GUI applications using CSS, HTML and JavaScript and web services like this one in React.js</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i className="fas fa-database"></i></div>
          <h2>Database Management</h2>
          <p>Proficient in SQL and RDBMS system design, architecture and building together with some knowledge in NoSql databases.</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i className="fas fa-network-wired"></i></div>
          <h2>Information Security</h2>
          <p>Knowledgeable in securing secure databases and systems using industry stamdards, frameworks and best practises.</p>
        </div>
      </div>
      {/* Duplicate the row for the third row */}
      <div className="skills-row">
        {/* Repeat or duplicate the skill card for three more skills */}
        <div className="skill-card">
          <div className="skill-icon"><i class="fa-solid fa-compass-drafting"></i></div>
          <h2>System Modelling</h2>
          <p>Building efficient databases, proccesses and Object Oriented Systems using btoh system modelling and ER-modelling using UML, Chen-notation, BPMN and Crows-foot notation</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i class="fa-solid fa-chart-simple"></i></div>
          <h2>Business Intelligence</h2>
          <p>Creating responsive and interactive dashboard using Qlik Sense BI-tools</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon"><i className="fas fa-cloud"></i></div>
          <h2>Cloud Computing</h2>
          <p>Experience in deployment and working with Virtual machines, hosting servers and databases on Azure Cloud.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LanguageLoader from './components/LanguageLoader'; // Ensure this path is correct

function App() {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false); // New state to control the fade-out animation

  useEffect(() => {
    setTimeout(() => {
      setAnimateOut(true); // Start the fade-out animation
      setTimeout(() => {
        setLoading(false); // Hide the loader after the animation completes
      }, 500); // This duration should match the CSS animation duration
    }, 2500); // Adjust time as needed
  }, []);

  return (
    <>
      {loading ? (
        <div className={animateOut ? 'fade-out' : ''}>
          <LanguageLoader />
        </div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;


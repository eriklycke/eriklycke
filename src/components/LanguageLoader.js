import React, { useState, useEffect } from 'react';
import './LanguageLoader.css'; // Make sure to create this CSS file

const greetings = [
  'Hello',     // English
  'Hola',      // Spanish
  'Bonjour',   // French
  'Hallo',     // German
  'Ciao',      // Italian
  'Olá',       // Portuguese
  'Привет',    // Russian
  'こんにちは', // Japanese
  '안녕하세요',    // Korean
  '你好',        // Chinese
  // Add more languages if you like
];

function LanguageLoader() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGreeting((currentGreeting) => (currentGreeting + 1) % greetings.length);
    }, 250); // Change the greeting every 2 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="language-loader">
      {greetings[currentGreeting]}
    </div>
  );
}

export default LanguageLoader;

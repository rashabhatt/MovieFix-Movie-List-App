// Header.tsx

import React from 'react';
import './Header.css'; // Import your CSS file for styling

interface HeaderProps {
  // Define any props here if needed
}

const Hero: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="logo">MOVIEFLIX</div>
      <nav className="menu">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Hero;

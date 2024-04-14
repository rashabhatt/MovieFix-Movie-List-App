// Header.tsx

import React from "react";
import "../style/HeaderStyle.css";
import HeaderWrapper from "../style/HeaderWrapper";

interface HeaderProps {
  // Define any props here if needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <div className="logo">MOVIEFIX</div>
      <nav className="menu">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

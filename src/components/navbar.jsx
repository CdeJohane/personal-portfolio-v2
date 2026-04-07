import './navbar.css';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="NavBar">
      <a href="#home" className="brand" onClick={closeMenu}>Junior Johane</a>
      <button className="navbar-mobile" type="button" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <nav>
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Work</a></li>
          <li><a href="#contacts" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

import './navbar.css';
import React from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleOpen}></div>
            <nav className="NavBar">
                <div className="navbar-mobile" onClick={toggleOpen}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="NavBar-center">
                    <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                        <li className="nav-home">
                            <a href="#home">Home</a>
                        </li>
                        <li className="nav-about">
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-projects">
                            <a href="#projects">Projects/Experience</a>
                        </li>
                        <li className="nav-contact">
                            <a href="#contacts">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}
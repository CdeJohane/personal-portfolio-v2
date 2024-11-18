import './navbar.css';

export default function Navbar() {
    return (
        <nav className="NavBar">
            <div className="NavBar-center">
                <ul className="nav-links">
                    <li className="nav-home">
                        <a href="/home">Home</a>
                    </li>
                    <li className="nav-about">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-projects">
                        <a href="/projects">Projects</a>
                    </li>
                    <li className="nav-contact">
                        <a href="/contact">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
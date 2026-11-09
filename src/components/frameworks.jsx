import './frameworks.css';
import Logo from './logo.jsx';

const languages = [
  { link: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg', name: 'Python' },
  { link: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', name: 'Java' },
  { link: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', name: 'JavaScript' },
  { link: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', name: 'C' },
  { link: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', name: 'C++' }
];

const tools = [
  { link: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', name: 'React' },
  { link: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg', name: 'PyTorch' },
  { link: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png', name: 'Flask' }
];

export default function Frameworks() {
  return (
    <section className="frameworks section" id="skills">
      <p className="section-title">Skills</p>
      <h2>Core stack</h2>
      <p className="skills-note">I use Python for AI experiments and algorithm implementation, and React with Flask for web applications. My projects also use NumPy, PySAT, Tkinter, Pygame, Tailwind CSS, PostgreSQL, and Flutter/Dart.</p>

      <h3>Languages</h3>
      <div className="frameworks-list">
        {languages.map((item) => <Logo key={item.name} link={item.link} name={item.name} />)}
      </div>

      <h3>Frameworks & tools</h3>
      <div className="frameworks-list">
        {tools.map((item) => <Logo key={item.name} link={item.link} name={item.name} />)}
      </div>
    </section>
  );
}

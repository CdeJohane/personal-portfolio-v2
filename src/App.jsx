import './App.css';
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Frameworks from './components/frameworks.jsx';
import Contacts from './components/contacts.jsx';
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><div className="page-shell"><Navbar/><main id="main"><Intro/><About/><Projects/><Frameworks/><Contacts/></main></div></>;
}

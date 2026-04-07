import './App.css'
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Frameworks from "./components/frameworks.jsx";
import Projects from "./components/projects.jsx";
import Contacts from "./components/contacts.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Intro />
        <About />
        <Frameworks />
        <Projects />
        <Contacts />
      </main>
    </>
  )
}

export default App

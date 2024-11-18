import './App.css'
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import About from "./components/about.jsx";
import Frameworks from "./components/frameworks.jsx";
import Projects from "./components/projects.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Intro  />
        <About />
        <Frameworks />
        <Projects />

    </>
  )
}

export default App

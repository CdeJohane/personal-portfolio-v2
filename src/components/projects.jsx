const projects = [
  {
    "title": "Game of Life Oscillator Discovery",
    "description": "For my MSc dissertation, I built a Python/Tkinter tool to search for oscillators in Conway’s Game of Life by moving cells. I compared tabular Q-learning with a PySAT-based SAT approach, evaluating search reliability on small-grid patterns.",
    "year": "2026",
    "stack": "Python / Tkinter / PySAT"
  },
  {
    "title": "Reinforcement-Learning Tank",
    "description": "For my UJ AI coursework, I implemented a Q-learning agent in a Pygame tank environment. I connected game states, actions, and rewards to a tabular learning loop to study agent behaviour.",
    "year": "2025",
    "stack": "Python / Pygame / Q-learning"
  },
  {
    "title": "Conditional Variational Autoencoder",
    "description": "I implemented a conditional VAE without machine-learning libraries for a UJ project, working through the encoder, latent representation, and decoder to explore conditional generation.",
    "year": "2025",
    "stack": "Python / Conditional VAE"
  },
  {
    "title": "DeepLabV3 Semantic Segmentation",
    "description": "I developed a DeepLabV3-based segmentation workflow using PyTorch for the Safe-Seg-24 project, with a FastAPI backend and React interface for working with image-segmentation results.",
    "year": "2025",
    "stack": "PyTorch / FastAPI / React"
  },
  {
    "title": "SolarViz — Solar Management App",
    "description": "As part of a three-person UCT capstone team, I contributed to a solar power-monitoring app for the Hasso Plattner d-school building. I worked with a Flask backend and React/Tailwind CSS frontend, with PostgreSQL for data storage.",
    "year": "2023",
    "stack": "Flask / React / PostgreSQL"
  },
  {
    "title": "Premier League Prediction App",
    "description": "I’m developing a Flutter/Dart app with a Flask backend to track football predictions among friends. The project includes a companion admin app for managing the prediction game.",
    "webpage": "https://github.com/CdeJohane/soccer_prediction_app",
    "year": "2024–now",
    "stack": "Flutter / Dart / Flask"
  }
];
export default function Projects() {
  return <section className="section" id="projects" aria-labelledby="work-title">
    <div className="grid section-heading"><p className="meta section-index">02 / Selected work</p><h2 id="work-title">Ideas, implemented.</h2><p className="section-aside">Research & personal projects.<br />Academic repositories are not public.</p></div>
    <table className="project-table"><caption className="sr-only">Selected projects, technologies and repository links</caption>
      <colgroup><col className="year-col"/><col className="title-col"/><col className="stack-col"/><col className="link-col"/></colgroup>
      <thead><tr>{['Year','Project / Scope','Stack','Link'].map(x=><th key={x} scope="col" className="meta">{x}</th>)}</tr></thead>
      <tbody>{projects.map(x=><tr key={x.title}><td className="project-year">{x.year}</td><td><h3>{x.title}</h3><p>{x.description}</p></td><td className="project-stack">{x.stack}</td><td>{x.webpage ? <a href={x.webpage} target="_blank" rel="noopener noreferrer" aria-label={`View ${x.title} repository`}>GitHub <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M3 3h10v10" /></svg></a> : <span className="meta">Not public</span>}</td></tr>)}</tbody>
    </table>
  </section>;
}

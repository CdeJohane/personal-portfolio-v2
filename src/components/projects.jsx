import './projects.css';
import ProjectSummary from './project_summary.jsx';
import Experience from './experience.jsx';

const projects = [
  {
    "title": "Game of Life Oscillator Discovery",
    "description": "For my MSc dissertation, I built a Python/Tkinter tool to search for oscillators in Conway’s Game of Life by moving cells. I compared tabular Q-learning with a PySAT-based SAT approach, evaluating search reliability on small-grid patterns."
  },
  {
    "title": "Reinforcement-Learning Tank",
    "description": "For my UJ AI coursework, I implemented a Q-learning agent in a Pygame tank environment. I connected game states, actions, and rewards to a tabular learning loop to study agent behaviour."
  },
  {
    "title": "Conditional Variational Autoencoder",
    "description": "I implemented a conditional VAE without machine-learning libraries for a UJ project, working through the encoder, latent representation, and decoder to explore conditional generation."
  },
  {
    "title": "DeepLabV3 Semantic Segmentation",
    "description": "I developed a DeepLabV3-based segmentation workflow using PyTorch for the Safe-Seg-24 project, with a FastAPI backend and React interface for working with image-segmentation results."
  },
  {
    "title": "SolarViz — Solar Management App",
    "description": "As part of a three-person UCT capstone team, I contributed to a solar power-monitoring app for the Hasso Plattner d-school building. I worked with a Flask backend and React/Tailwind CSS frontend, with PostgreSQL for data storage."
  },
  {
    "title": "Premier League Prediction App",
    "description": "I’m developing a Flutter/Dart app with a Flask backend to track football predictions among friends. The project includes a companion admin app for managing the prediction game.",
    "webpage": "https://github.com/CdeJohane/soccer_prediction_app"
  }
];

const experience = [
  {
    "date": "January 2026 – January 2027 (expected)",
    "title": "MSc Advanced Computer Science — University of Liverpool",
    "description": "I’m studying advanced computer science and comparing Q-learning and SAT for Game of Life oscillator discovery in my dissertation."
  },
  {
    "date": "2025",
    "title": "BSc Honours Computer Science — University of Johannesburg",
    "description": "I completed AI-focused honours study, including reinforcement learning, conditional generative modelling, and semantic segmentation projects."
  },
  {
    "date": "2020 – 2023",
    "title": "BSc Computer Science and Computer Engineering — University of Cape Town",
    "description": "I studied algorithms, software engineering, and computer engineering, and contributed to the SolarViz team capstone."
  }
];

export default function Projects() {
  return (
    <section className="projects-overall section" id="projects">
      <p className="section-title">Work</p>
      <div className="projects">
        <div className="projects-main">
          <h2>Selected Projects</h2>
          <p>These projects span my academic research and personal development work. Some academic repositories are not public.</p>
          {projects.map((project) => <ProjectSummary key={project.title} {...project} />)}
        </div>
        <div className="projects-sum-list" id="experience">
          <h2>Education & Research Experience</h2>
          {experience.map((item) => <Experience key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}

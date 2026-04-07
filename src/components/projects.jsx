import './projects.css';
import ProjectSummary from './project_summary.jsx';
import Experience from './experience.jsx';
import screens from '../assets/screens/webpage.png';

const projects = [
  {
    weblink: screens,
    webpage: 'https://github.com/yourusername/project-one',
    title: '[Placeholder] Flagship Project',
    description: 'Use 1-2 lines: problem, your role, stack, and measurable outcome.'
  },
  {
    weblink: screens,
    webpage: 'https://github.com/yourusername/project-two',
    title: '[Placeholder] Backend/API Project',
    description: 'Briefly highlight architecture, scale, reliability, and deployment.'
  },
  {
    weblink: screens,
    webpage: 'https://github.com/yourusername/project-three',
    title: '[Placeholder] AI/ML Project',
    description: 'Mention model type, data size, metrics, and business/user impact.'
  }
];

const experience = [
  {
    date: '2026',
    title: '[Placeholder] Current role / education',
    description: 'Include scope, tech stack, and measurable achievements.'
  },
  {
    date: '2025',
    title: '[Placeholder] Previous role / internship',
    description: 'Focus on ownership and concrete outcomes.'
  },
  {
    date: '2024',
    title: '[Placeholder] Degree / milestone',
    description: 'Keep this concise and relevant to your target opportunities.'
  }
];

export default function Projects() {
  return (
    <section className="projects-overall section" id="projects">
      <p className="section-title">Work</p>
      <div className="projects">
        <div className="projects-main">
          <h2>Selected Projects</h2>
          {projects.map((project) => <ProjectSummary key={project.title} {...project} />)}
        </div>
        <div className="projects-sum-list">
          <h2>Timeline</h2>
          {experience.map((item) => <Experience key={`${item.date}-${item.title}`} {...item} />)}
        </div>
      </div>
    </section>
  );
}

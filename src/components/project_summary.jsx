import PropTypes from 'prop-types';
import './project_summary.css';

export default function ProjectSummary({ webpage, title, description }) {
  return (
    <article className="projects-summary">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {webpage && <a href={webpage} target="_blank" rel="noopener noreferrer">View repository<span className="sr-only"> for {title}</span></a>}
      </div>
    </article>
  );
}

ProjectSummary.propTypes = {
  webpage: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

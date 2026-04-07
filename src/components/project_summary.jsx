import PropTypes from 'prop-types';
import './project_summary.css';

export default function ProjectSummary({ weblink, webpage, title, description }) {
  return (
    <article className="projects-summary">
      <img src={weblink} alt={`${title} preview`} loading="lazy" />
      <a href={webpage} target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </a>
    </article>
  );
}

ProjectSummary.propTypes = {
  weblink: PropTypes.string.isRequired,
  webpage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

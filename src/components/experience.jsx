import PropTypes from 'prop-types';
import './experience.css';

export default function Experience({ date, title, description }) {
  return (
    <article className="experience">
      <p className="experience-date">{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

Experience.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

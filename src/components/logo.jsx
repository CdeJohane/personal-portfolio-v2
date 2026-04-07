import PropTypes from 'prop-types';
import './logo.css';

export default function Logo({ link, name }) {
  return (
    <div className="logo">
      <img src={link} alt={name} loading="lazy" />
      <p>{name}</p>
    </div>
  );
}

Logo.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

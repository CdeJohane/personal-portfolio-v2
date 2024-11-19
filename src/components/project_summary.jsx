import './project_summary.css';

export default function ProjectSummary(props) {
    return (
        <div className="projects-summary">
            {/* eslint-disable-next-line react/prop-types */}
            <img src={props.weblink} alt="Weblink" />
            {/* eslint-disable-next-line react/prop-types */}
            <a href={props.webpage} target="_blank" rel="noopener noreferrer">
                <h5 className="project-title">
                    {/* eslint-disable-next-line react/prop-types */}
                    {props.title}
                </h5>
                <p className="project-description">
                    {/* eslint-disable-next-line react/prop-types */}
                    {props.description}
                </p>
            </a>
        </div>
    );
}
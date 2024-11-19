import './experience.css';

export default function Experience(props) {
    return (
        <div className="experience">
            <h5>{props.date}</h5>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}
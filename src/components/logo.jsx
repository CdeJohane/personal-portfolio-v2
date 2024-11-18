import './logo.css';

export default function Logo(props) {
    return (
        <div className="logo">
            {/* eslint-disable-next-line react/prop-types */}
            <img src={props.link} alt={props.name} />
            {/* eslint-disable-next-line react/prop-types */}
            <p>{props.name}</p>
        </div>
    );
}
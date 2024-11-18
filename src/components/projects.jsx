import './projects.css';

export default function Projects() {
    return (
        <div className="projects-overall">
            <h1>Projects</h1>
            <div className="projects">

                <div className="projects-main">
                    <h2>Prem Admin Soccer Predictions 2024/25 (Version 1)</h2>
                    <p>This project was made to monitor the prediciton scores of my friend group throughout the 2023/4 Premier league season, to see who made the best predictions within that season</p>
                    <p>Technologies Used:</p>
                    <ul>
                        <li>Python(Backend through Flask)</li>
                        <li>Flutter(Frontend)</li>
                        <li>Python Anywhere(Backend Host)</li>
                    </ul>
                </div>
                <div className="projects-sum-list"></div>
            </div>
        </div>
    );
}
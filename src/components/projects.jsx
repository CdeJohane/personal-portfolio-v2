import './projects.css';
import ProjectSummary from "./project_summary.jsx";

export default function Projects() {
    return (
        <div className="projects-overall">
            <h1>Projects And Experience</h1>
            <div className="projects">
                <div className="projects-main">
                    <ProjectSummary weblink="" webpage="https://github.com/CdeJohane/soccer_prediction_admin" title="Prem Debates Prediction Admin" description="Developed in Flutter(Dart) and Flask(Python) this app was made as a way to track soccer predictions amongst friends that were in the game. This is specifically for the 2024/5 English Premier League Season"/>
                    <ProjectSummary weblink="" webpage="https://github.com/CdeJohane/PersonalPortfolio" title="Project Portfolio V1" description="This is my Initial Design of my Project Portfolio, created using React JS"/>
                    <ProjectSummary weblink="" webpage="youtube.com" title="SolarViz App" description="Built using Flask(Python) and ReactJS(JavaScript)., this University Capstone project was built to maonitor energy usage at the University of Cape Town's Hasso-Plaatner D-School Building, in groups of 3"/>
                </div>
                <div className="projects-sum-list"></div>
            </div>
        </div>
    );
}
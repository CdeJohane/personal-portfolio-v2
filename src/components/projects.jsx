import './projects.css';
import ProjectSummary from "./project_summary.jsx";
import Experience from "./experience.jsx";
import screens from "../assets/screens/webpage.png";

export default function Projects() {
    return (
        <div className="projects-overall" id="projects">
            <h1>Projects And Experience</h1>
            <div className="projects">
                <div className="projects-main">
                    <h2>Projects</h2>
                    <ProjectSummary weblink={screens} webpage="https://github.com/CdeJohane/soccer_prediction_admin" title="Prem Debates Prediction Admin" description="Developed in Flutter(Dart) and Flask(Python) this app was made as a way to track soccer predictions amongst friends that were in the game. This is specifically for the 2024/5 English Premier League Season"/>
                    <ProjectSummary weblink={screens} webpage="https://github.com/CdeJohane/PersonalPortfolio" title="Project Portfolio V1" description="This is my Initial Design of my Project Portfolio, created using React JS"/>
                    <ProjectSummary weblink={screens} webpage="youtube.com" title="SolarViz Web App" description="Built using Flask(Python) and ReactJS(JavaScript)., this University Capstone project was built to maonitor energy usage at the University of Cape Town's Hasso-Plaatner D-School Building, in groups of 3"/>
                </div>
                <div className="projects-sum-list">
                    <h2>Experience</h2>
                    <Experience date="2026-2028" title="MSc Computer Science(ETH)" description="Masters in Computer Science at ETH Zurich in Switzerland, specialising in Artificial Intelligence"/>
                    <Experience date="2025" title="BScHonours Computer Science(UJ)" description="Honours in Computer Science at University of Johannesburg, specialising in Artificial Intelligence"/>
                    <Experience date="2020-2024" title="BSc in Computer Science and Computer Engineering(UCT)" description="Completed my CS degree at the University of Cape Town" />
                </div>
            </div>
        </div>
    );
}
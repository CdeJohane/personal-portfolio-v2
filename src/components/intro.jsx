import './intro.css';

export default function Intro() {
  return (
    <section className="intro section" id="home">
      <p className="section-title">Portfolio</p>
      <p className="intro-badge">AI-focused student engineer</p>
      <h1>Building thoughtful AI products with clean engineering and curious research.</h1>
      <p className="intro-subtitle">Replace this with your strongest value proposition and the kind of opportunities you are actively seeking.</p>
      <div className="intro-metrics">
        <div>
          <p className="metric-label">Student status</p>
          <p className="metric-value">BSc Hons CS (AI)</p>
        </div>
        <div>
          <p className="metric-label">Research interests</p>
          <p className="metric-value">LLMs · ML Systems</p>
        </div>
        <div>
          <p className="metric-label">Open to</p>
          <p className="metric-value">Internships + Projects</p>
        </div>
      </div>
    </section>
  );
}

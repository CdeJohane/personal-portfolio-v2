import './intro.css';

export default function Intro() {
  return (
    <section className="intro section" id="home">
      <p className="section-title">Portfolio</p>
      <p className="intro-badge">Software development · Applied AI</p>
      <h1>Hi, I’m Junior Johane. I build software and applied AI projects.</h1>
      <p className="intro-subtitle">I work with Python, PyTorch, React, and Flask, from reinforcement-learning experiments to full-stack applications. I’m looking for graduate software development and AI/ML engineering roles.</p>
      <div className="intro-metrics">
        <div>
          <p className="metric-label">Student status</p>
          <p className="metric-value">MSc Advanced Computer Science</p>
        </div>
        <div>
          <p className="metric-label">Research interests</p>
          <p className="metric-value">Reinforcement Learning · SAT</p>
        </div>
        <div>
          <p className="metric-label">Open to</p>
          <p className="metric-value">Graduate roles</p>
        </div>
      </div>
    </section>
  );
}

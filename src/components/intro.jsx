import './intro.css';

export default function Intro() {
  return (
    <section className="intro section" id="home">
      <p className="section-title">Portfolio</p>
      <h1>Software Engineer focused on useful, human-centered products.</h1>
      <p className="intro-subtitle">Replace this with your most compelling one-line value proposition.</p>
      <div className="intro-metrics">
        <div>
          <p className="metric-label">Years experience</p>
          <p className="metric-value">[X]+</p>
        </div>
        <div>
          <p className="metric-label">Projects shipped</p>
          <p className="metric-value">[X]</p>
        </div>
        <div>
          <p className="metric-label">Primary focus</p>
          <p className="metric-value">AI + Full Stack</p>
        </div>
      </div>
    </section>
  );
}

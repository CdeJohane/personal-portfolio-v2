const education = [
  {
    "date": "January 2026 – January 2027 (expected)",
    "title": "MSc Advanced Computer Science — University of Liverpool",
    "description": "I’m studying advanced computer science and comparing Q-learning and SAT for Game of Life oscillator discovery in my dissertation."
  },
  {
    "date": "2025",
    "title": "BSc Honours Computer Science — University of Johannesburg",
    "description": "I completed AI-focused honours study, including reinforcement learning, conditional generative modelling, and semantic segmentation projects."
  },
  {
    "date": "2020 – 2023",
    "title": "BSc Computer Science and Computer Engineering — University of Cape Town",
    "description": "I studied algorithms, software engineering, and computer engineering, and contributed to the SolarViz team capstone."
  }
];
export default function About() {
  return <section className="section grid" id="about" aria-labelledby="about-title"><p className="meta section-index">01 / Profile</p>
    <div className="profile-main"><h2 id="about-title">Curiosity.<br />Code.<br />Concrete results.</h2><p className="lead">I’m Junior Johane, a computer scientist from Botswana based in Liverpool. I explore how intelligent algorithms solve problems — then build the software around them.</p><p>I’m pursuing an MSc in Advanced Computer Science at the University of Liverpool. My work spans reinforcement learning, SAT-based search, computer vision, and full-stack applications. I enjoy implementing algorithms, comparing approaches, and making the results usable.</p></div>
    <div className="education"><h3 className="meta">Education & research experience</h3>{education.map(x=><article key={x.title}><p className="meta">{x.date}</p><h4>{x.title}</h4><p>{x.description}</p></article>)}</div>
  </section>;
}

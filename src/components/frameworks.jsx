const skills = [
  ['01', 'Languages', 'Python, JavaScript, Java, C, C++, Dart'],
  ['02', 'AI & algorithms', 'PyTorch, NumPy, PySAT, reinforcement learning, SAT/MaxSAT, computer vision'],
  ['03', 'Web & applications', 'React, Flask, FastAPI, Tailwind CSS, PostgreSQL, Flutter'],
  ['04', 'Experimental tools', 'Tkinter, Pygame, Git, Linux']
];
export default function Frameworks() {
  return <section className="section grid" id="skills" aria-labelledby="skills-title"><p className="meta section-index">03 / Expertise</p><div className="skills-intro"><h2 id="skills-title">Tools with<br />a purpose.</h2><p>I use Python for AI experiments and algorithm implementation, and React with Flask for web applications.</p></div><dl className="skill-list">{skills.map(([n,title,tools])=><div key={title}><dt><span className="meta">{n}</span>{title}</dt><dd>{tools}</dd></div>)}</dl></section>;
}

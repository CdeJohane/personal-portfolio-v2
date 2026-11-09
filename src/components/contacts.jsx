import './contacts.css';

export default function Contacts() {
  return (
    <section className="contacts section" id="contacts">
      <p className="section-title">Contact</p>
      <h2>Let’s talk about software and AI opportunities.</h2>
      <p className="contact-note">I’m based in Liverpool and completing my MSc in Advanced Computer Science. Get in touch about graduate roles, research collaborations, or any of the projects above.</p>
      <div className="buttons">
        <a className="emailBtn" href="mailto:jurath.code@gmail.com">Email me</a>
        <a className="linkedinBtn" href="https://www.linkedin.com/in/juniorjohane/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="githubBtn" href="https://github.com/CdeJohane" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

import './contacts.css';

export default function Contacts() {
  return (
    <section className="contacts section" id="contacts">
      <p className="section-title">Contact</p>
      <h2>Let’s build something thoughtful together.</h2>
      <p className="contact-note">Replace the links below with your active channels and add your preferred response time.</p>
      <div className="buttons">
        <button className="emailBtn" type="button" onClick={() => { window.location.href = 'mailto:yourname@email.com'; }}>
          Email me
        </button>
        <button className="linkedinBtn" type="button" onClick={() => window.open('https://www.linkedin.com/in/your-profile/', '_blank')}>
          LinkedIn
        </button>
        <button className="githubBtn" type="button" onClick={() => window.open('https://github.com/yourusername', '_blank')}>
          GitHub
        </button>
      </div>
    </section>
  );
}

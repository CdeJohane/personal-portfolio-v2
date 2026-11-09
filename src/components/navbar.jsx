import { useEffect, useState } from 'react';
export default function Navbar() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    update(); const timer = setInterval(update, 1000); return () => clearInterval(timer);
  }, []);
  return <header className="header">
    <div className="grid header-strip meta"><a href="#home">JJ / Portfolio</a><span>Liverpool, UK <time>{time} local</time></span><span className="availability">Available for graduate roles</span></div>
    <nav aria-label="Main navigation" className="navigation meta"><a href="#about">01 About</a><a href="#projects">02 Work</a><a href="#skills">03 Expertise</a><a href="#contacts">04 Contact <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M3 3h10v10" /></svg></a></nav>
  </header>;
}

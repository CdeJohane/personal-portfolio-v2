import './contacts.css';

export default function Contacts() {
    return (
        <div className="contacts" id="contacts">
            <h1>Contacts</h1>
            <div className="buttons">
                <button className="emailBtn" type="button" onClick={() => window.location.href = 'mailto:jurath.code@gmail.com'}> Email</button>
                <button className="linkedinBtn" type="button" onClick={() => window.open('https://www.linkedin.com/in/junior-johane-6b1185189/', '_blank')}> LinkedIn</button>
                <button className="githubBtn" type="button" onClick={() => window.open('https://github.com/CdeJohane', '_blank')}> Github</button>
            </div>
        </div>
    );
}
import './contacts.css';

export default function Contacts() {
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            <div className="buttons">
                <button className="emailBtn" type="button"> Email</button>
                <button className="linkedinBtn" type="button"> LinkedIn</button>
                <button className="githubBtn" type="button"> Github</button>
            </div>
        </div>
    );
}
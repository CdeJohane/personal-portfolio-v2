import './frameworks.css';
import Logo from "./logo.jsx";

export default function Frameworks() {
    return (
        <div className="frameworks">
            <h1>Languages</h1>
            <div className="frameworks-list">
                <Logo link="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" name="Python" />
                <Logo link="https://www.vectorlogo.zone/logos/java/java-icon.svg" name="Java" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" name="C" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" name="C++" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" name="JavaScript" />
            </div>
            <h1>Frameworks</h1>
            <div className="frameworks-list">
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" name="PyTorch" />
                <Logo link="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png" name="Flutter" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" name="React JS" />
                <Logo link="https://icon.icepanel.io/Technology/png-shadow-512/Flask.png" name="Flask" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" name="AWS" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" name="MySql" />
                <Logo link="https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg" name="Tensorflow" />
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
import KrushiMartLogo from '../../assets/KrushiMartLogo.png';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img className='logo-img' src={KrushiMartLogo} alt="Company Logo" />
                    <b className='brand-name moving-text'>Krushi Mart</b>
                </div>
                <p className="footer-description">
                    Online learning community school for coder kids powered by CodingOtt
                </p>
            </div>

            <div className="footer-section">
                <h2 className="footer-heading">Popular Links</h2>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="/">Home</Link></li>
                    <li><Link className="footer-link" to="/teachers">Teachers</Link></li>
                    <li><Link className="footer-link" to="/holidays">Holidays</Link></li>
                    <li><Link className="footer-link" to="/contact-us">Contact us</Link></li>
                </ul>
            </div>

            <div className="footer-section">
                <h2 className="footer-heading">Social Profiles</h2>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="https://www.youtube.com/@codingott"><i className="ri-youtube-line icon"></i>YouTube</Link></li>
                    <li><Link className="footer-link" to="https://www.facebook.com/profile.php?id=100089487015758"><i className="ri-messenger-line icon"></i>Facebook</Link></li>
                    <li><Link className="footer-link" to="https://www.linkedin.com/in/er-saurav-4318aa21b/"><i className="ri-linkedin-box-line icon"></i>Linkedin</Link></li>
                    <li><Link className="footer-link" to="https://www.instagram.com/codingott"><i className="ri-instagram-line icon"></i>Instagram</Link></li>
                </ul>
            </div>

            <div className="footer-section">
                <h2 className="footer-heading">Contact us</h2>
                <form className="contact-form">
                    <input className="form-input" required name="fullname" placeholder="Fullname" type="text" />
                    <input className="form-input" required name="email" placeholder="example@mail.com" type="email" />
                    <textarea className="form-input" required name="message" placeholder="Message" rows="3" />
                    <button className="form-submit">Submit</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;

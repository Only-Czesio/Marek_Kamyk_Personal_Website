import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    
    <script src="https://kit.fontawesome.com/8e8c437e5e.js" crossOrigin="anonymous"></script>

    return(
        <>
            <div className="footer white-text btn-color d-flex flex-row justify-content-between">
                <div className="footer-container myInterests d-flex flex-column gap-3 justify-content-center">
                    <h2 className='gold'>Hobbies i have :</h2>
                    <p>Video Games : Dayz, Dota2, Factorio</p>
                    <p>Instruments : classic and acoustic guitar, piano</p>
                    <p>Books : Fantasy, Psychology, Philosophy</p>
                    <p>Astronomy : Space and time, black and warpholes</p>
                </div>
                <div className="footer-container siteMap d-flex flex-column gap-3 justify-content-center">
                    <h2 className='gold'>SiteMap :</h2>
                    <a href="#start">I will take you to the start</a>
                    <a href="#blog">Let's go read my blog</a>
                    <a href="#portfolio">I can show you my projects</a>
                    <a href="#contact">Contact me, let's talk</a>
                </div>
                <div className="footer-container socialMedia d-flex gap-3 flex-column justify-content-center align-items-center">
                    <div>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faGithub} /> Github
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faEnvelope} />E-mail me
                    </div>
                    
                </div>
            </div>
            <footer className='blackFoot'>Copyrights Kamyk Marek 2024 &copy;</footer>
        </>
    )
}
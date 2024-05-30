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
                    <p className='gold'>Video Games : Dayz, Dota2, Factorio</p>
                    <p className='gold'>Instruments : classic and acoustic guitar, piano</p>
                    <p className='gold'>Books : Fantasy, Psychology, Philosophy</p>
                    <p className='gold'>Astronomy : Space and time, blackholes and warpholes</p>
                </div>
                <div className="footer-container siteMap d-flex flex-column gap-3 justify-content-center">
                    <h2 className='gold'>SiteMap :</h2>
                    <a href="/Marek_Kamyk_Personal_Website">I will take you to the start</a>
                    <a href="/Marek_Kamyk_Personal_Website/Blog">Let's go read my blog</a>
                    <a href="/Marek_Kamyk_Personal_Website/Portfolio">I can show you my projects</a>
                    <a href="/Marek_Kamyk_Personal_Website/Contact">Contact me, let's talk</a>
                </div>
                <div className="footer-container socialMedia d-flex gap-3 flex-column justify-content-center align-items-center">
                    <div>
                    <a href="https://www.facebook.com/marek.kamyk.16" target="_blank" ><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                    </div>
                    <div>
                    <a href="https://www.instagram.com/marek_kamyk_/" target="_blank" ><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                    </div>
                    <div>
                    <a href="https://github.com/Only-Czesio" target="_blank" ><FontAwesomeIcon icon={faGithub} /> Github</a>
                    </div>
                    <div>
                    <a href="mailto:marek@kamyk.me" target="_blank" ><FontAwesomeIcon icon={faEnvelope} /> E-mail me</a>
                    </div>
                    
                </div>
            </div>
            <footer className='blackFoot'>Copyrights Kamyk Marek May 2024 &copy;</footer>
        </>
    )
}
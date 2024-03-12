import './Footer.scss';

export default function Footer() {

    return(
        <>
            <div className="footer white-text btn-color d-flex flex-row justify-content-between">
                <div className="myInterests">
                    <h2 className='gold'>Hobbies i have :</h2>
                    <p>Video Games : Dayz, Dota2, Factorio</p>
                    <p>Instruments : classic and acoustic guitar, piano</p>
                    <p>Books : Fantasy, Psychology, Philosophy</p>
                    <p>Astronomy : Space and time, black and warpholes</p>
                </div>
                <div className="siteMap d-flex flex-column gap-3">
                    <h2 className='gold'>SiteMap :</h2>
                    <a href="#start">I will take you to the start</a>
                    <a href="#blog">Let's go read my blog</a>
                    <a href="#portfolio">I can show you my projects</a>
                    <a href="#contact">Contact me, let's talk</a>
                </div>
                <div className="contactForm">C</div>
            </div>
            <footer className='blackFoot'>Copyrights Kamyk Marek 2024 &copy;</footer>
        </>
    )
}
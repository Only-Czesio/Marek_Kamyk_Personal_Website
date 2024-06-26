import { useEffect, useState } from 'react';
import pic from '../public/animatedMe.jpg'
import './Introduction.scss'

export default function Introduction() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(current => !current);
        }, 1500);

        return () => clearInterval(interval);
    }, []);
   


    return(
        <>
        <section className='introduction d-flex flex-column justify-content-center align-items-center '>
            <h1 className="gold bigger">Hi, I'm Kamyk Marek</h1>
            <p className="white-text">I'm currently looking for a job in IT. Contact me if you have some offer for me</p>
            <div className={`underscore ${isActive ? 'underscore-active' : ''}`}></div>
        </section>
        <section className='d-flex justify-content-around introduction'>
            <div className="img-container">
                <img src={pic} className='responsive-image' height="200" width="200" ></img>
            </div>
            <div className='right d-flex flex-column align-items-start'>
            <div className="intro-article white-text darker-bg mb-5">
                <h2 className="black-gold">FromZeroToHero</h2>
                <p>To be completely honest my life until lately was not pretty.</p>
                <p>I've decided to learn programming to save my life.</p>
                <p>I'm inviting you to check my blog and portfolio</p>
                <p>and maybe give me a chance.</p>
                <p>I want to bring value to people lifes</p>
            </div>
            <a href="/Marek_Kamyk_Personal_Website/Portfolio"><button className='btn white-text btn-mine mb-3'>Portfolio</button></a>
            <a href="/Marek_Kamyk_Personal_Website/Blog"><button className='btn white-text btn-mine'>Blog</button></a>
            </div>
        </section>
        </>
    )
}
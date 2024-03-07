import AniBox from "../../components/AniBox"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

export default function Home() {
    useEffect(() => {
        Aos.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            animatedClassName: 'aos-animate',
            offset: 120, 
            delay: 0,
            duration: 400,
            easing: 'ease-in-sine',
            once: true,
        })
    },[])

    return(
        <section className="hero-section">
            <div className="hero-section-content">
                <div className="hero-section-txt">
                    <div className="overflow-container">
                        <p data-aos="slide-down" data-aos-delay="1300">A Website Portfolio</p>
                    </div>
                    <div className="overflow-container">
                        <h1 data-aos="slide-up" data-aos-delay="900">FRESH. CREATIVE. DEDICATION.</h1>
                    </div>
                </div>
                
                <div className="hero-section-btn">
                    <Link to="/contact">
                        <button id="GIT" data-aos="fade-right" data-aos-delay="500">Get in Touch</button>
                    </Link>
                    <Link to="/aboutme">
                        <button id="DCV" data-aos="fade-left" data-aos-delay="500">About Me</button>
                    </Link>
                </div>
            </div>
            <AniBox />
            <div className="hero-section-img-desktop" data-aos="slide-up">
                <img src="./image/home.png" alt="Yor"/>
            </div>   
        </section>
    )
}







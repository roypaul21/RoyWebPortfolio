import AniBox from "../../components/AniBox";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function AboutMe() {
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
        <section className="about-section">
            <div className="about-section-left-content">
                <div className="about-icon-wrapper" data-aos="slide-right" data-aos-delay="500">
                    <div className="about--section--icon" data-aos="zoom-out">
                            <a href="https://facebook.com" className="icon-button">
                                <FaFacebook className="icon fb--icon" />
                            </a>
                            <a href="https://instagram.com" className="icon-button">
                                <FaInstagram className="icon insta--icon" />
                            </a>
                            <a href="https://linkedin.com" className="icon-button">
                                <FaLinkedin className="icon link--icon" />
                            </a>
                            <a href="https://github.com" className="icon-button">
                                <FaGithub className="icon git--icon" />
                            </a>
                    </div>
                </div>
                <div className="about-section-image-desktop" data-aos="fade-right">
                   <img src="./image/profile-port.png" alt="Yor"/>
                </div>
                <AniBox />
            </div>
            <div className="about-section-right-content">
                <h1 data-aos="slide-left">05</h1>
                <div className="about-section-text">
                    <h1 data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="bottom-bottom">ABOUT ME</h1>
                    <h2 data-aos="fade-up" data-aos-delay="1300" data-aos-anchor-placement="bottom-bottom">Hi, Roy here</h2>
                    <p data-aos="fade-up" data-aos-delay="1700" data-aos-anchor-placement="bottom-bottom">A passionate Computer Science graduate, I view technology as more than just a career, 
                        it's an exciting exploration fueled by curiosity and inspired by pioneering works.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="1800" data-aos-anchor-placement="bottom-bottom">The journey ahead in the realm of technology may present its challenges,
                         but I firmly believe that, with the right environment and mindset,
                        every difficulties transforms into a possibility waiting to be realized.
                    </p>
 
                </div>
            </div>
           
        </section>
    )
}
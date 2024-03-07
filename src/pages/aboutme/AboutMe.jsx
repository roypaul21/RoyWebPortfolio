import AniBox from "../../components/AniBox";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiSolidFilePdf } from "react-icons/bi";
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";

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

    const PdfCVFile = "https://drive.google.com/uc?export=download&id=1nr5WgVc5-2Wr9rynVgIk2eDmH3O0_t92";
    const downloadFile = () => {
        const anchor = document.createElement('a');
        anchor.href = PdfCVFile;
        anchor.download = 'CV.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    return(
        <section className="about-section">
            <div className="about-section-left-content">
                <div className="about-section-image-desktop" >
                    <img src="./image/profile-port.png" data-aos="slide-up" loading="lazy" alt="Me"/>
                </div>
                <AniBox />
            </div>
            <div className="about-section-right-content">
                <h1 data-aos="slide-left">05</h1>
                <div className="about-section-text">
                    <div className="overflow-container">
                        <h1 data-aos="slide-up" data-aos-delay="800" data-aos-anchor-placement="bottom-bottom">ABOUT ME</h1>
                    </div>
                    <div className="overflow-container">
                        <h2 data-aos="slide-up" data-aos-delay="1200" data-aos-anchor-placement="bottom-bottom">Hi, Roy here</h2>
                    </div>
                    <div className="overflow-container">
                        <p data-aos="slide-down" data-aos-delay="1600" data-aos-anchor-placement="bottom-bottom">A passionate Computer Science graduate, I view technology as more than just a career, 
                            it's an exciting exploration fueled by curiosity and inspired by pioneering works.
                        </p>
                    </div>
                    <div className="overflow-container">    
                        <p data-aos="slide-down" data-aos-delay="1700" data-aos-anchor-placement="bottom-bottom">The journey ahead in the realm of technology may present its challenges,
                            but I firmly believe that, with the right environment and mindset,
                            every difficulties transforms into a possibility waiting to be realized.
                        </p>
                    </div>
                    <div className="about-section-btn">
                        <button className="contact-download-pdf" onClick={downloadFile} data-aos="fade-left" data-aos-delay="2000">
                            <BiSolidFilePdf/> Download CV
                        </button>

                        <Link to="/skills">
                                <button id="skills" data-aos="fade-left" data-aos-delay="2100">My Skills</button>
                        </Link>
                        
                    </div>
                    <div className="about-icon-wrapper" data-aos="fade-left" data-aos-delay="2300">
                        <div className="about--section--icon" data-aos="zoom-out">
                                <a href="https://www.facebook.com/profile.php?id=61552119843810" className="icon-button">
                                    <FaFacebook className="icon fb--icon" />
                                </a>
                                <a href="https://instagram.com" className="icon-button">
                                    <FaInstagram className="icon insta--icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/roy-paul-narido-448b97285/" className="icon-button">
                                    <FaLinkedin className="icon link--icon" />
                                </a>
                                <a href="https://github.com/roypaul21" className="icon-button">
                                    <FaGithub className="icon git--icon" />
                                </a>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </section>
    )
}
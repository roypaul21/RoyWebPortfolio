import Carousel from 'react-bootstrap/Carousel';

import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";

import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { SiVisualstudiocode } from "react-icons/si";

import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";

import { SiSelenium } from "react-icons/si";

export default function Skills() {
    return(
        <section className="skills-section">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <div className='skills-carousel'>
                        <div className='skills-section-image'>
                            <img id="UID" src="./image/UID.png" alt="Yor"/>
                        </div>
                        <div className='skills-section-text'>
                            <h3>UI / UX Design</h3>
                            <p>Crafting seamless User Interface and captivating User Experience designs 
                                through the proficient use of Figma, Photoshop, and other design tools.
                            </p>
                            <div className="skills-icon-wrapper"> 
                              <FaFigma className='skills-icon' />
                              <SiAdobephotoshop className='skills-icon'/>
                              <SiCanva className='skills-icon'/>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='skills-carousel'>
                        <div className='skills-section-image'>
                                <img id="DC" src="./image/DC.png" alt="Yor"/>
                            </div>
                            <div className='skills-section-text'>
                                <h3>Machine Learning</h3>
                                <p>Particularly in computer vision and detection, is a subset of artificial intelligence.
                                     It involves developing statistical algorithms that learn from data to recognize patterns and features.
                                </p>
                                <div className="skills-icon-wrapper"> 
                                    <FaPython className='skills-icon' />
                                    <FaDatabase className='skills-icon'/>
                                    <SiTensorflow className='skills-icon' />
                                    <SiPytorch className='skills-icon' />
                                    <SiGooglecolab className='skills-icon' />
                                </div>
                            </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='skills-carousel'>
                        <div className='skills-section-image'>
                                <img id="game" src="./image/Game.png" alt="Yor"/>
                            </div>
                            <div className='skills-section-text'>
                                <h3>Game Dev</h3>
                                <p>Immersing in the world of game development, where creativity meets technology, 
                                   I bring ideas to life with the help of Unity and other tools turning virtual experiences into exciting adventures. 
                                </p>
                                <div className="skills-icon-wrapper"> 
                                    <TbBrandCSharp className='skills-icon' />
                                    <FaUnity className='skills-icon'/>
                                    <SiTensorflow className='skills-icon' />
                                    <SiVisualstudiocode className='skills-icon' />
                                </div>
                            </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='skills-carousel'>
                        <div className='skills-section-image'>
                                <img id="web" src="./image/DC.png" alt="Yor"/>
                            </div>
                            <div className='skills-section-text'>
                                <h3>Web Development</h3>
                                <p>Web development ranges from simple static pages to complex web applications,
                                    involving tasks like design, coding, testing, and optimization. 
                                </p>
                                <div className="skills-icon-wrapper"> 
                                    <SiVisualstudiocode className='skills-icon' />
                                    <FaReact className='skills-icon' />
                                    <DiDjango className='skills-icon'/>
                                    <SiFlask className='skills-icon'/>
                                    <SiStreamlit className='skills-icon'/>
                                    <IoLogoJavascript className='skills-icon'/>
                                    <FaHtml5 className='skills-icon'/>
                                    <FaCss3Alt className='skills-icon'/> 
                                 </div>
                            </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='skills-carousel'>
                        <div className='skills-section-image'>
                                <img id="web" src="./image/QA.png" alt="Yor"/>
                            </div>
                            <div className='skills-section-text'>
                                <h3>Automation System</h3>
                                <p>Developing a QA automation scripts to run tests on the software that validating 
                                   the functionality of software and ensures it meets requirements
                                   before being released into production.
                                </p>
                                <div className="skills-icon-wrapper"> 
                                    <FaPython className='skills-icon' />
                                    <SiSelenium className='skills-icon' />
                                 </div>
                            </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}
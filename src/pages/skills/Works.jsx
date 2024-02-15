import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export default function Works() {
    return(
        <section className="works-section">
            <div className="works-content content-left" data-aos="fade-left">
                 <div className="work-content-text">
                    <p>Tanya's Web Portfolio</p>
                 </div>
                <div className="works-content-img">
                    <a href="/">
                        <img id="work-1" src="./image/work1.png" alt="Yor"/>
                    </a>
                    <div className="works-icon-wrapper">
                        <a href="/" > <FaGithub /> </a> 
                    </div>
                </div>
            </div>
            <div className="works-content content-right" data-aos="fade-right">
                <div className="work-section-content">
                    <div className="work-content-text">
                        <p>Tatbeeb Medical</p>
                    </div>
                    <div className="works-content-img">
                        <a href="/">
                            <img id="work-1" src="./image/work2.png" alt="Yor"/>
                        </a>
                        <div className="works-icon-wrapper">
                            <a href="/" > <FaFigma /> </a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="works-content content-left" data-aos="fade-left">
                 <div className="work-content-text">
                    <p>Vertex Medical</p>
                 </div>
                <div className="works-content-img">
                    <a href="/">
                        <img id="work-1" src="./image/work3.png" alt="Yor"/>
                    </a>
                    <div className="works-icon-wrapper">
                        <a href="/" > <FaFigma   /> </a> 
                    </div>
                </div>
            </div>
            <div className="works-content content-right" data-aos="fade-right">
                <div className="work-section-content">
                    <div className="work-content-text">
                        <p>Duck Counting</p>
                    </div>
                    <div className="works-content-img">
                        <a href="/">
                            <img id="work-1" src="./image/work4.png" alt="Yor"/>
                        </a>
                        <div className="works-icon-wrapper">
                            <a href="/" > <FaGithub /> </a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="works-content content-left" data-aos="fade-left">
                 <div className="work-content-text">
                    <p>Orange Man Game</p>
                 </div>
                <div className="works-content-img">
                    <a href="/">
                        <img id="work-1" src="./image/work5.png" alt="Yor"/>
                    </a>
                    <div className="works-icon-wrapper">
                        <a href="/" > <FaGithub /> </a> 
                    </div>
                </div>
            </div>
            <div className="works-content content-right" data-aos="fade-right">
                <div className="work-section-content">
                    <div className="work-content-text">
                        <p>Othello Game</p>
                    </div>
                    <div className="works-content-img">
                        <a href="/">
                            <img id="work-1" src="./image/work6.png" alt="Yor"/>
                        </a>
                        <div className="works-icon-wrapper">
                            <a href="/" > <FaGithub /> </a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="works-content content-left" data-aos="fade-left">
                 <div className="work-content-text">
                    <p>Eight Puzzle Game</p>
                 </div>
                <div className="works-content-img">
                    <a href="/">
                        <img id="work-1" src="./image/work7.png" alt="Yor"/>
                    </a>
                    <div className="works-icon-wrapper">
                        <a href="/" > <FaGithub /> </a> 
                    </div>
                </div>
            </div>
        </section>
    )
}
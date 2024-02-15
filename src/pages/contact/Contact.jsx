import Lottie from "lottie-react";
import animationData from "../../assets/contact-animation.json"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Contact() {
    return(
        <section className="contact-section">
            <div className="contact-section-left">
                <div className="contact-section-text" data-aos="fade-down">
                    <h1>Get in Touch</h1>
                    <p>Got any ideas? Lets Talk!</p>
                </div>
                <div className="contact-section-animation">
                    <Lottie animationData={animationData} data-aos="fade-right" data-aos-delay="400" />   
                    <div className="contact-section-right" data-aos="fade-left" data-aos-delay="400">
                       <input type="text" name="name" placeholder="Name" />
                       <input type="text" name="email" placeholder="Email" />
                       <input type="text" name="number" placeholder="Number" />
                       <textarea type="text" name="msg" placeholder="Message" id="msg-id" />
                       <button className="contact-send-btn">Send</button>
                    </div>
                </div>  
            </div>

            <div className="contact-section-icon" data-aos="fade-up" data-aos-delay="800">
                <div className="contact-icon">
                    <MdEmail />
                    <p>roypnarido@gmail.com</p>
                </div>
                <div className="contact-icon">
                    <FaPhoneAlt />
                    <p>0927 420 7118</p>
                </div>     
            </div>
            
        </section>
    )
     
}
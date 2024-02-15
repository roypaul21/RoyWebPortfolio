import Lottie from "lottie-react";
import animationData from "../../assets/contact-animation.json"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_hzrtc8d', 'template_llvjenk', form.current, {
            publicKey: 'yN6d_Wp2DVuahY_Uo',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            toast.success('Email Send Successfully. Thank you!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return(
        <section className="contact-section">
            <ToastContainer />
            <div className="contact-section-left">
                <div className="contact-section-text" data-aos="fade-down">
                    <h1>Get in Touch</h1>
                    <p>Got any ideas? Lets Talk!</p>
                </div>
                <div className="contact-section-animation">
                    <Lottie animationData={animationData} data-aos="fade-right" data-aos-delay="400" />   
                    <div className="contact-section-right" data-aos="fade-left" data-aos-delay="400">
                       <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" />
                        <input type="text" name="from_email" placeholder="Email" />
                        <input type="text" name="from_subject" placeholder="Subject" />
                        <textarea type="text" name="message" placeholder="Message" id="msg-id" />
                        <button type="submit" className="contact-send-btn">Send</button>
                       </form>
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
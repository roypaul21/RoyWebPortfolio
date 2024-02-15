import Footer from "../../components/Footer";
import Contact from "./Contact";
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function ContactsFooter(){
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
        <>
         <Contact />
         <Footer />
        </>
    )

}
import Skills from "./Skills";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Works from "./Works";

export default function SkillsWorks() {
      useEffect(() => {
            Aos.init({
               disable: false,
               startEvent: 'DOMContentLoaded',
               animatedClassName: 'aos-animate',
               offset: 120, 
               delay: 0,
               duration: 400,
               easing: 'ease-in-sine',
               once:  false,
               mirror: true,
            })
      },[])
      return(
         <>
            <Skills />
            <Works />
         </>
      )
}
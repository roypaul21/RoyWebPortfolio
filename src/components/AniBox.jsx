import React, {useState, useEffect} from "react"

export default function AniBox() {
    const [windowDimension, detectWidth] = useState({
        numBoxes: (Math.floor(window.innerWidth / 100))
    })

    const detectWidthSize = () => {
        detectWidth({
            numBoxes: window.innerWidth
            })
        useEffect(() => {
             window.addEventListener("resize", detectWidthSize)

             return() => {
                window.removeEventListener("resize", detectWidthSize)
             }
        }, [windowDimension])

    }

    const boxNumbers = Array.from({ length: windowDimension.numBoxes }, (_, index) => index + 1)
    
    const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * 25)); // Generating a random number initially

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomNum(Math.floor(Math.random() * 25)); 
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);
   

    const boxes = boxNumbers.map((index) => {
        const boxPosLeft = {
            position: "absolute",
            bottom: `${Math.floor(Math.random() * window.innerHeight)}px`,
            left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        }

        const boxPosRight = {
            position: "absolute",
            bottom: `${Math.floor(Math.random() * window.innerHeight)}px`,
            right: `${Math.floor(Math.random() * window.innerWidth)}px`,
        }

        return (
            <section className="anibox-section">
                <div style={boxPosLeft} className="animation-box" key={index}></div>
                <div style={boxPosRight} className="animation-box" key={index}></div>
            </section>
        )
    })

    return (
        <section className="anibox-section">
            {boxes}
        </section>
    )
}
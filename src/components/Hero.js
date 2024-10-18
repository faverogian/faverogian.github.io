import "./Hero.css"

import { useEffect, useState } from 'react';
import { TypeDelete } from "../hooks/typedelete"
import { TypingEffect } from "../hooks/typing";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';
import "./MyButton.css"


const Hero = () =>{

    const finalMessage = TypingEffect("MSc. Student, ML Researcher, Engineer.", 200, 0)

    const scrollToAboutMe = () => {
        scroller.scrollTo('about-me', {
          duration: 50,
          delay: 0,
          smooth: 'easeOutQuad',
          offset: -75
        });
      };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if user is on a mobile device
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileDevices = ['android', 'iphone', 'ipod'];

        if (mobileDevices.some(device => userAgent.includes(device))) {
            setIsMobile(true);
        }
    }, []);

    return (
        <div className="hero">
            <section className="hero-content">
                <div className="inner-text">
                    <p>{finalMessage}</p>
                </div>
                <div className="see-more-btn-container">
                    {isMobile ? (
                        // On mobile, render a link to download the CV
                        <a href="gian-favero-resume.pdf" download style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }}>
                            <Button variant="outline-info" className="my-btn see-more">My CV</Button>
                        </a>
                    ) : (
                        // On desktop, render a link to the resume page
                        <Link to={"/resume"} style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }}>
                            <Button variant="outline-info" className="my-btn see-more">My CV</Button>
                        </Link>
                    )}
                    
                    <a href={"https://scholar.google.ca/citations?user=EjbUcWEAAAAJ&hl=en"} style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info" className="my-btn see-more">Google Scholar</Button>
                    </a>
                    {/*<Link to={"./projects"} style={{ width: "fit-content", marginLeft: 20, marginRight: 20 }}>
                        <Button variant="outline-info" className="my-btn see-more">View My Work</Button>
                    </Link>*/}
                </div>
            </section>
        </div>
    );
};

export default Hero
import React from 'react'
import { Card } from 'react-bootstrap';
import RevealComponent from '../components/revealComponent'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

import "./Education.css"

const Education = () => {
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    function handleHover(event){
        const element = event.target.closest(".my-card")
        element.classList.toggle('hovered');
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.style.filter = item.classList.contains("hovered") ? "none" : "blur(3px)"            
        });
    }

    function handleUnhover(event){
        const items = document.querySelectorAll('.my-card');
        items.forEach(item => {
            item.classList.remove("hovered")
            item.style.filter = "none"            
        });
    }

    const handleOpenModal = (id) => {
        // disableBodyScroll();
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-50%"
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "blur(3px)"
    };
  
    const handleCloseModal = (id) => {
        const MOI = document.getElementById(id)//modal of interest
        MOI.style.left = "-200%";
        MOI.children[0].classList.toggle("active")
        const toBlur = document.getElementById("blur-on-modal")
        toBlur.style.filter = "none"
        // enableBodyScroll()
    };

    const handleTouchStart = (event) => {
        const containerRef = event.target.closest(".card-body")
        console.log(containerRef)
        const boundingRect = containerRef.getBoundingClientRect()
        const { clientX, clientY } = event.touches[0];
    
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${clientX - boundingRect.left}px`;
        bubble.style.top = `${clientY - boundingRect.top}px`;
    
        containerRef.appendChild(bubble);
    
        setTimeout(() => {
        containerRef.removeChild(bubble);
        }, 1000);
    }

  return (
    <div>
        <NavBar/>
        <div id='blur-on-modal'>
            <h1 className='post-nav my-header' style={{marginBottom: "20px"}}> <span className='accent-text'>Education</span> History</h1>
            <div className='card-container' style={{width: "100vw"}}>
                <Card id="uow" alt="University of Windsor Campus" className='my-card'>
                    <Card.Body>
                        <div className="short-info" style={{justifyContent: "space-between"}}>
                            <Card.Title>University of Windsor (2019-2023)</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; BASc. Electrical Engineering
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", paddingBottom: "15px", marginBottom: "0"}}>
                                &#8226; GPA: 4.0 (99/100)
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="mcgill" alt="McGill University" className='my-card'>
                    <Card.Body>
                        <div className="short-info" style={{justifyContent: "space-between"}}>
                            <Card.Title>McGill University (2023-2025)</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; MSc. Electrical and Computer Engineering
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", paddingBottom: "15px", marginBottom: "0"}}>
                                &#8226; GPA: 4.0 (A)
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="mila" alt="Mila" className='my-card'>
                    <Card.Body>
                        <div className="short-info" style={{justifyContent: "space-between"}}>
                            <Card.Title>Mila (2023-2025)</Card.Title>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0"}}>
                                &#8226; Supervised by Dr. Tal Arbel and Dr. Chris Pal
                            </Card.Text>
                            <Card.Text style={{paddingLeft: "10px", marginBottom: "0", paddingBottom: "15px"}}>
                                
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div id='blur-on-modal'>
                <h1 className='my-header' style={{marginTop: "20px", marginBottom: "40px"}}>Academic <span className='accent-text'>Awards</span></h1>
                <table>
                    <thead>
                        <tr>
                            <th>Award</th>
                            <th>Provider</th>
                            <th>Description</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>McGill Master's Top-Up Award</td>
                            <td>McGill University</td>
                            <td>Funding valued at $5,000 to assist in attracting more high-calibre domestic Masters students to the Faculty of Engineering</td>
                            <td>2024-2025</td>
                        </tr>
                        <tr>
                            <td>HBHL Fellowship</td>
                            <td>Healthy Brains, Healthy Lives</td>
                            <td>Funding valued at $10,000. Funding provided through FRQNT award.</td>
                            <td>2024-2025</td>
                        </tr>
                        <tr>
                            <td>FRQNT Master's Scholarship</td>
                            <td>Fonds de recherche du Québec</td>
                            <td>Valued at $20,000/year. One of ten Master’s students awarded in the province of Quebec.</td>
                            <td>2024-2025</td>
                        </tr>
                        <tr>
                            <td>MSc. Scholarship</td>
                            <td>Mila</td>
                            <td>Stipend awarded for pursuit of graduate degree in ML/AI in affiliation with Mila</td>
                            <td>2023 - 2024</td>
                        </tr>
                        <tr>
                            <td>Governor General's Silver Medal</td>
                            <td>Governor General of Canada</td>
                            <td>Presented to the student who achieves the highest academic standing in a 4-year Bachelor degree in an honors program.</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Board of Governor's In-Course Medal</td>
                            <td>University of Windsor</td>
                            <td>Awarded yearly to the undergraduate student in the Faculty of Engineering with the highest GPA</td>
                            <td>2020 - 2023</td>
                        </tr>
                        <tr>
                            <td>Ruza Robote Memorial Award</td>
                            <td>University of Windsor</td>
                            <td>Awarded annually to the full-time undergraduate student who achieves the highest cumulative average by the end of the spring examinations</td>
                            <td>2020 - 2023</td>
                        </tr>
                        <tr>
                            <td>Alumni Scholarship</td>
                            <td>University of Windsor</td>
                            <td>Awarded annually to a student entering first year, based on outstanding academic achievement</td>
                            <td>2019 - 2023</td>
                        </tr>
                        <tr>
                            <td>President's Entrance Scholarship</td>
                            <td>University of Windsor</td>
                            <td>Awarded to entering students with an admission average of 95% or higher</td>
                            <td>2019 - 2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <Footer></Footer>
        </div>
    </div>
  )
}

export default Education
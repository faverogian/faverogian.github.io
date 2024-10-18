import NavBar from '../components/NavBar'
import { Card, Carousel, CarouselCaption } from "react-bootstrap";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

import { CplusplusOriginal, Css3Original, GitOriginal, JavascriptOriginal, LinuxOriginal, MysqlOriginal, NginxOriginal, PythonOriginal, RaspberrypiOriginal, VimOriginal, VscodeOriginal } from 'devicons-react'
import { SiAutodesk, SiJinja, SiMicrosoftedge, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiWireshark } from "react-icons/si";
import putty from  "../assets/icons/putty.svg"

import "./Experience.css"

const Experience = () => {
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
            <Modal id={"apag-modal"} onClose={()=> handleCloseModal("apag-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Role: </b> Embedded Software Engineer Intern (May 2022 - Sept. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>Created prototype PCBs and integrated proof-of-concept vehicle systems for uses in capacitive touch interfaces (with audio effects), ambient lighting solutions and climate control HMIs.</li>
                                <li>Developed AUTOSAR compliant firmware for automotive systems on Microchip SAM platforms.</li>
                                <li>Worked with Voltera V-One PCB printer to create custom PCBs for use in automotive applications.</li>
                                <li>Used CAN bus analyzers, oscilloscopes, and programmable power supplies to debug and test hardware and firmware.</li>
                            </ul>
                        </p>
                        <p><b className="keys">Skills Learned: </b>
                            C, Bus Master, PCB Manufacturing, Soldering, Oscilloscopes, AUTOSAR, Autodesk EAGLE, Voltera V-One, Microchip SAM, Jira, Confluence, Python
                        </p>
                    </div>
                </div>   
            </Modal>
            <Modal id={"Stellantis-modal"} onClose={()=> handleCloseModal("Stellantis-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Role: </b>System Validation Intern (Sept. 2022 - Dec. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>Designed and built a new validation platform to be used in all North American facilities, achieving improvements of 50% in footprint reduction and a 200% increase in productive capacity.</li>
                                <li>Created an organization-wide SharePoint site for the EE Validation North America group, reducing the volume of active sites from 5 to 1.</li>
                                <li>Conducted failure root cause analysis using CAN tools.</li>
                            </ul>
                        </p>
                        <p><b>Skills Learned: </b> Excel, PowerPoint, Python, CANalyzer, SharePoint
                        </p>
                    </div>
                </div>  
            </Modal>
            <Modal id={"tesla-modal"} onClose={()=> handleCloseModal("tesla-modal")}>
                <div className="carousel-holder">
                    <div style={{width: "90%"}}>
                        <p>
                            <b className="keys">Role: </b>Software Integration Engineer Intern (Jan. 2022 - May. 2022)
                        </p>
                        <p>
                            <b className="keys">Technical Details: </b>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>Worked in the high-voltage system integration team to co-develop, test, and deploy firmware and hardware updates on vehicle platforms (Model X, Model Y, Semi).</li>
                                <li>Collaborated with firmware, hardware, and software engineers to debug code and ensure that new features and updates were implemented correctly and safely using CAN bus analyzers, custom test scripts, programmable power supplies, and oscilloscopes.</li>
                                <li>Designed an automated system to enable rapid full-scale charging tests to be carried out on vehicles, significantly reducing the time required to test and validate new charging features.</li>
                                <li>Built new hardware features and expanded subsystem test coverage to enable more efficient overnight testing and continuous integration.</li>
                            </ul>
                        </p>
                        <p><b>Skills Learned: </b>  Python, C++, CANape, CANalyzer, Pytest, Git, Jenkins, Jira, Confluence, Linux, Bash, Oscilloscopes, Programmable Power Supplies/Loads, Soldering  
                        </p>
                    </div>
                </div>  
            </Modal>
            <NavBar />
            <div id='blur-on-modal'>
                <h1 className='post-nav my-header'>Industry <span className="accent-text">Experience</span></h1>
                <div className='card-container' style={{width: "100vw"}}>
                    <Card id="tesla" alt="tesla" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("tesla-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Tesla Inc.</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <CplusplusOriginal size={"20"} alt="Cpp logo"></CplusplusOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiWireshark size={"20"} style={{color: 'teal'}} alt="wireshark logo"></SiWireshark>
                                    </div>
                                    <div className='devicon'>
                                        <LinuxOriginal size={"20"} alt="linux logo"></LinuxOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <GitOriginal size={"20"} alt="vscode logo"></GitOriginal>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="Stellantis" alt="stellantis" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("Stellantis-modal")} onTouchStart={handleTouchStart}> <div className="short-info">
                                <Card.Title>Stellantis</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiMicrosoftpowerpoint size={"20"} style={{color: 'red'}} alt="powerpoint logo"></SiMicrosoftpowerpoint>
                                    </div>
                                    <div className='devicon'>
                                        <SiMicrosoftexcel size={"20"} style={{color: 'green'}} alt="excel logo"></SiMicrosoftexcel>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id="APAG" alt="apag logo" className='my-card'>
                        <Card.Body onClick={()=> handleOpenModal("apag-modal")} onTouchStart={handleTouchStart}>
                            <div className="short-info">
                                <Card.Title>APAG CoSyst</Card.Title>
                                <div className='icon-list-container'>
                                    <div className='devicon'>
                                        <PythonOriginal size={"20"} alt="Python logo" className='python'></PythonOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <img src={putty} height={"20px"} alt="PuTTY logo"></img>
                                    </div>
                                    <div className='devicon'>
                                        <RaspberrypiOriginal size={"20"} color="rgb(128,0,0)" alt="rpi logo"></RaspberrypiOriginal>
                                    </div>
                                    <div className='devicon'>
                                        <SiAutodesk size={"20"} alt="autodesk logo"></SiAutodesk>
                                    </div>
                                    <div className='devicon'>
                                        <CplusplusOriginal size={"20"} alt="Cpp logo"></CplusplusOriginal>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Experience
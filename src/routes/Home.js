import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import RevealComponent from '../components/revealComponent'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import { FaGithub, FaCar, FaRegLightbulb, FaRaspberryPi } from 'react-icons/fa'
import { GiBrainstorm } from 'react-icons/gi'
import { Element } from 'react-scroll'
import { PiCircuitryLight } from 'react-icons/pi'
import hf from "../assets/hf-logo.png"
import "./Home.css"
import { CplusplusPlain, GitOriginal, JavascriptOriginal, NumpyOriginal, OpencvOriginal, PythonOriginal, TensorflowLine, PytorchOriginal, MatlabOriginal, PandasOriginal } from 'devicons-react'
import gsap from 'gsap'
import { SiLtspice, SiPandas } from 'react-icons/si'

const Home = () => {

    useEffect(() => {
        gsap.to(".attribute-card", {
          duration: 2,
          "--rotate": 360,
          repeat: -1,
          ease: "linear",
        });
    
    
    }, []);

  return (
    <div>
        <NavBar />
        <Hero />
        <Element id="about-me" name="about-me" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <RevealComponent>
            <h1 style={{margin:"50px 0px 0px 0px"}} className='my-header'>
                About <span className='accent-text'>Me</span>
            </h1>
            <div className="three-container">
                <div className="column">
                    <div className='emphasized-text'>Past</div>
                    <p class='justify'>
                        A graduate of the University of Windsor's Electrical Engineering program (BASc.) who held its highest GPA from 2019-2023. Industry experience spans across embedded software development and hardware design (APAG CoSyst), software integration and automated testing (Tesla Inc.), and system validation (Stellantis). Research involvement in pouch cell modelling (I-FuELs) and eye-tracking (HS Lab).
                    </p>
                </div>
                <div className="column">
                    <div className='emphasized-text'>Present</div>
                    <p class='justify'>
                        Graduate student at McGill University and Mila obtaining an MSc. in Electrical and Computer Engineering. Research focus lies at the juxtapsition of computer vision, machine learning, and medical image analysis under the supervision of Dr. Tal Arbel. Currently applying novel generative modelling techniques (variational diffusion models) for image and video synthesis.
                    </p>
                </div>
                <div className="column">
                    <div className='emphasized-text'>Future</div>
                    <p class='justify'>
                        Looking for industry roles as an applied machine learning engineer or research scientist for internship (Winter 2025) or full-time employment (Fall 2025). Keen on applying experience in software development, machine learning, and generative modelling to bring novel solutions to problems in a variety of fields including healthcare, music, finance, or autonomous vehicles.
                    </p>
                </div>
            </div>
            </RevealComponent>
            <RevealComponent>
            <div style={{backgroundColor: "", width: "100vw", padding: "20px 20px"}}>
                <div style={{margin:"0px 10px 40px 10px", fontSize: "2rem", textAlign: "center"}}>
                    Conducting <span className='accent-text'>ML/AI</span> Research with Modern Tools
                </div>
                    <div className='row-flex-center'>
                        {/*
                            weird devicons bug where both python and matlab use url(#a) and url(#b)
                            for svg styling. whichever is first in dom takes priority

                            forced to overwrite python colors since their logo
                            colours are publicly available and matlabs arent

                            therefore i have to load matlab first, but if i do display none it never renders
                            and updates the urls so i have to render it as size 0
                        */}
                        <div>
                            <MatlabOriginal size={0} alt="MATLAB"></MatlabOriginal>
                        </div>
                        <div>
                            <PythonOriginal size={70} className="my-tools-icons python" alt="Python"></PythonOriginal>
                        </div>
                        <div>
                            <PytorchOriginal size={70} className="my-tools-icons" alt="pytorch"></PytorchOriginal>
                        </div>
                        <div>
                            <img src={hf} alt="HuggingFace" style={{ width: '90px', height: '90px', marginTop: 
                        '10px' }}/>                       
                        </div>
                        <div>
                            <TensorflowLine size={70} className="my-tools-icons" alt="Tensorflow"></TensorflowLine>
                        </div>
                        <div>
                            <GitOriginal size={70} className="my-tools-icons" alt="Git"></GitOriginal>
                        </div>
                        <div>
                            <FaGithub size={70} className="my-tools-icons" alt="Github" color='#6e5494'></FaGithub>
                        </div>
                    </div>
            </div>
            <div style={{backgroundColor: "", width: "100vw", padding: "20px 20px"}}>
                    <div className='row-flex-center'>
                        {/*
                            weird devicons bug where both python and matlab use url(#a) and url(#b)
                            for svg styling. whichever is first in dom takes priority

                            forced to overwrite python colors since their logo
                            colours are publicly available and matlabs arent

                            therefore i have to load matlab first, but if i do display none it never renders
                            and updates the urls so i have to render it as size 0
                        */}
                        <div>
                            <CplusplusPlain size={70} className="my-tools-icons" alt="C++"></CplusplusPlain>
                        </div>
                        <div>
                            <MatlabOriginal size={70} className="my-tools-icons" alt="matlab"></MatlabOriginal>
                        </div>
                        <div>
                            <SiLtspice size={70} className="my-tools-icons" alt="ltspice"></SiLtspice>
                        </div>
                        <div>
                            <NumpyOriginal size={70} className="my-tools-icons" alt="numpy"></NumpyOriginal>
                        </div>
                        <div>
                            <FaRaspberryPi size={70} className="my-tools-icons" alt="raspberrypi"></FaRaspberryPi>
                        </div>
                    </div>
            </div>
            </RevealComponent>
        </Element>
        <div>
                <div style={{fontSize: "2rem", margin: "10px 10px 20px 10px", textAlign: "center"}}>
                </div>
            </div>
        <Footer></Footer>
    </div>
  )
}

export default Home
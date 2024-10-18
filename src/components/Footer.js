import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare, FaMedium } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='my-footer'>
        <div className="footer-icon-container">
            <span className="footer-icons">
                <a href="https://www.linkedin.com/in/gianfavero/" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 0px" }}>
                    <FaLinkedin size={36} alt="LinkedIn" color="white" />
                </a>
                <a href="https://github.com/faverogian" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 5px" }}>
                    <FaGithub size={36} alt="Github" color="white" />
                </a>
                <a href="https://medium.com/@gian.favero" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 5px" }}>
                    <FaMedium size={36} alt="Github" color="white" />
                </a>
            </span>
        </div>
        <p className='footer-text'>gian.favero@mail.mcgill.ca</p>
        <p className='footer-text'>Copyright &#169; Bryan Fraschetti 2023</p>

    </footer>
    )
}

export default Footer
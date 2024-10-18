
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "./NavBar.css"
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <Navbar expand="lg">
            <Container className="nav-container">
                <Link to="/" id="brand">Gian Favero</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-menu">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/projects" className="nav-item">Publications</Link>
                        <Link to="/education" className="nav-item">Education</Link>
                        <Link to="/experience" className="nav-item">Experience</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default NavBar
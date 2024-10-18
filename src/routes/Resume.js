import React from 'react'
import { Card, Nav } from 'react-bootstrap';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const Resume = () => {
  
    return (
        <div className="document-container"
        style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '195vh',
                width: '100vw',
                overflow: 'hidden',
            }
        }>
        <NavBar style={{ marginBottom: '50px' }} />
        <iframe
            src="resume.html"
            title="Resume"
            style={{
            width: '80%',
            height: '100%',
            backgroundColor: 'white',
            boxSizing: 'border-box',
            paddingTop: '100px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            }}
        />
        <div style={{ display: 'flex', justifyContent: 'center',marginTop: '20px', marginBottom: '20px' }}>
          <a href="gian-favero-resume.pdf" download="gian_favero_resume.pdf">
            <button className="btn btn-outline-info">Download</button>
          </a>
        </div>
        <Footer />
        </div>
    );
  };

export default Resume
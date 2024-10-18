import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import '../index.css'

const Ghb = ({repo}) => {
    const ButtonStyle = {
        marginBottom: "8px",
        display: "flex",
        alignItems: "center"
    }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <Link to={repo} target='_blank' rel="noreferrer">
            <Button variant='outline-info' className="my-btn" id="my-btn-accent" style={ButtonStyle}>
                <span style={{marginRight: "8px"}}>Source Code</span>
                <FaGithub size={20} style={{color: '#6e5494'}}></FaGithub>
            </Button>
        </Link>
    </div>
  )
}

export default Ghb
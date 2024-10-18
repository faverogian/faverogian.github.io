import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFilePdf, FaGithub } from 'react-icons/fa'
import '../index.css'

const Pdf = ({repo}) => {
    const ButtonStyle = {
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        color: "white",
    }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <Link to={repo} target='_blank' rel="noreferrer">
            <Button variant='outline-info' className="my-btn" style={ButtonStyle}>
                <span style={{marginRight: "8px"}}>PDF</span>
                <FaFilePdf size={20} style={{color:'white'}}></FaFilePdf>
            </Button>
        </Link>
    </div>
  )
}

export default Pdf
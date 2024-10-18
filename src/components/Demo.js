import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFilePdf, FaGithub, FaYoutube } from 'react-icons/fa'
import '../index.css'

const Demo = ({repo}) => {
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
                <span style={{marginRight: "8px"}}>Demo</span>
                <FaYoutube size={20} style={{color:'Red'}}></FaYoutube>
            </Button>
        </Link>
    </div>
  )
}

export default Demo
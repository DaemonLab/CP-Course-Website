import React from 'react'
import {Link} from "react-router-dom";
import './Style.css'
import img1 from '../logooo2.png' 

function Navbar() {
  return (        
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/"><img src={img1} className="navimg"/></Link>                                     
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contests" className="nav-link">Contests</Link>
                    </li>                    
                </ul>                                     
            </div>
            <Link to="yourprofile"> 
                <button className="btnnav">
                    Your Profile
                </button> 
            </Link>
            <Link to="login"> 
                <button className="btnnav2">
                    Login
                </button> 
            </Link>
            <Link to="signup"> 
                <button className=" btnnav2">
                    Signup
                </button> 
            </Link>            
            </div>        
    </nav>


  )
}

export default Navbar
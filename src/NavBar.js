/*
This script implements the 
navigation bar component
 */
import React from 'react';
import sprite from './danielSprite.png';

function MyNavBar(props){
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{paddingBottom: '0px'}}>
            <div id="nav-header">
                <div className="image-responsive">
                    <img id="sprite-daniel" src={sprite} alt="sprite-daniel"/>
                    <h2 id="name" className="navbar-brand mb-0 h1">DANIEL RODRÍGUEZ</h2>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="nav-opciones">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#welcome-section">Home</a>
                    <a className="nav-item nav-link" href="#about-me">About Me</a>
                    <a className="nav-item nav-link" href="#portfolio">Projects</a>
                    <a className="nav-item nav-link" href="#footer">Contact</a>
                    <a className="nav-item nav-link" href="#menu" id="menu-mobile"><i className="material-icons" style={{fontSize: '28px'}}>menu</i></a>
                </div>
            </div>
        </nav>        
    );
}

export default MyNavBar;
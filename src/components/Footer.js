import React from 'react';
import '../css/style.css';
import logo from '../images/logo.png';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <img className='logo' alt='logo' src={logo}></img>
      <p style={{ fontSize:'15px', marginBottom:'0px'}}>Brown Anime Video Game Ensemble</p>
      <p style={{ fontSize:'13px', marginTop:'0px'}}><a href="mailto:avge@brown.edu" rel="noreferrer" target="_blank">avge@brown.edu</a></p>
      <div>
      <SocialIcon className='footer-links' url="https://www.instagram.com/brownavge" bgColor='black' />
      <SocialIcon className='footer-links' url="https://www.youtube.com/@brownavge" bgColor='black' />
      <SocialIcon className='footer-links' url="https://discord.gg/kvfReCvyDn" bgColor='black' />
      </div>
      
    </div>
  );
};

export default Footer;

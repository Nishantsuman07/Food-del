import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>TOMATO is a project created with passion and dedication by Nishant, a BTech 4th year student at DTU College. This food ordering platform was built to provide users with a seamless and enjoyable experience, combining the power of modern web technologies. Special thanks to the DTU community and all those who supported the development of this website. Your feedback and support are highly valued as we continue to improve and grow TOMATO. Thank you for being a part of this journey.</p>
                <div className="footer-social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Nishant Chandra Suman</li>
                <li>9508608513</li>
                <li>sumannishant2003@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
    <a href="#" className='footer__thanks'>Thank You!</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.instagram.com/vishalxchauhan_/"><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/vishal287/"><BsLinkedin /></a>
      <a href="https://github.com/vishalchauhannn"><BsGithub /></a>
    </div>

    <div className="footer__copyright">
      <small>
        &copy; Vishal Chauhan. All rights reserved.
      </small>
    </div>
  </footer>  )
}

export default Footer
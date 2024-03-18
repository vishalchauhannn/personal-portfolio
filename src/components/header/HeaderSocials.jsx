import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/vishalxchauhan_/" target='_blank'><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/vishal287/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/vishalchauhannn" target='_blank'><BsGithub /></a>
    </div>
    )
}

export default HeaderSocials
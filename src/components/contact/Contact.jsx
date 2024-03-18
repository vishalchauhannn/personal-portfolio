import React from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_my5q21y",
      "template_wlhkcmm",
      form.current,
      "B2RtA0jlHJHu97NPn"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vishal626chauhan@gmail.com</h5>
            <a href="mailto:vishal626chauhan@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BiLogoTelegram className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <a href="https://t.me/Vishalchauhannn28" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 70820 69572</h5>
            <a href="https://wa.me/+917082069572" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

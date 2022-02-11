import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
            
              </div>
              <p className="cont">Contact Details</p>
              <div className="fl">
                <p>+91 8483847674</p>
                <p>Yavatmal, Maharashtra</p>
                <p>rohithirulkar848384@gmail.com</p>

              </div>
              <ul className="contactCircles">
              <li>
                  <a
                    href="https://github.com/Rohit8483"
                 
                  >
                    <FaGithub className="headerIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohit-hirulkar-775a79167/"
                 
                  >
                    <FaLinkedinIn className="headerIcon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/home.php" >
                    <FaFacebookF className="headerIcon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/rohithirulkar/"
                 
                  >
                    <FaInstagram className="headerIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

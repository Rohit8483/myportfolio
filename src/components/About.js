import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });

  return (
    <div className="about" id="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Results-driven React.js Developer with 2 years of experience,
                Skilled in utilizing React.js, Redux, and other modern front-end
                technologies to create responsive and scalable solutions.
                creating visually appealing and user-friendly interfaces. Strong
                problem-solving and communication skills, coupled with a passion
                for staying up-to-date with the latest industry trends and best
                practices. Excited to contribute expertise in React.js
                development to help companies achieve their goals and enhance
                the overall user experience.
              </div>

              <div className="header__buttons myBtn">
                <a
                  href="https://drive.google.com/file/d/1ZjmzLTT3pMIJFrA3IAAXGAPacrWXBlFd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

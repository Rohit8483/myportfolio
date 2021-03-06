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
                I'm Rohit Hirulkar and I'm a web developer with a focus on the
                MERN stack, but still exploring other technologies and
                frameworks that catch my interest! if you're looking for a
                developer to add to your team, I'd love to hear from you! Plaese
                feel free to Contact me.
              </div>

              <div className="header__buttons myBtn">
                <a
                  href="https://drive.google.com/file/d/1P5iu5Sarlpq-RPX3CP9a908f4vCev6nm/view?usp=sharing"
                  target="_blank"
                 
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

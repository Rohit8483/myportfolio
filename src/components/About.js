import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  // const [state] = React.useState([
  //   { id: 1, title: "Name:", text: "Rohit Hirulkar" },
  //   { id: 2, title: "Email:", text: "rohithirulkar848384@gmail.com" },
  //   { id: 3, title: "Phone:", text: "+91 8483847674" },
  //   { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/rohit-hirulkar-775a79167/" },
  // ]);
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
              I'm Rohit Hirulkar and I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you! Plaese feel free to Contact me.
              </div>
              {/* <div className="about__info-p2">
                nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit
              </div> */}
              {/* <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div> */}
               <div className="header__buttons myBtn">
                  <a href="https://drive.google.com/drive/folders/1QMnquZMldL5_oikcYZdxms82crkfMwM8?usp=sharing" target="_blank" className="btn btn-outline">
                    Resume
                  </a>
                 
                  {/* <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

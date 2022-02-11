import React from "react";
import  "./Skills.css"
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaNodeJs,
  FaLeaf,
} from "react-icons/fa";
const Skills = () => {
  const [header] = React.useState({
    // mainHeader: "***",
    subHeading: "SKILLS",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting\
    // industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      // industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCss3 className="commonIcons" />,
      heading: "CSS",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaJava className="commonIcons" />,
      heading: "JavaScript",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "React",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaNodeJs className="commonIcons" />,
      heading: "NodeJS",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaLeaf className="commonIcons" />,
      heading: "MongoDB",
      // text:
      //   "Lorem Ipsum is simply dummy text of the printing typesetting\
      //   industry. simply dummy",
    },
  ]);
  return (
    <div className="services" id="Skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            {/* <h3 className="heading">{header.mainHeader}</h3> */}
            <h1 className="mainHeader">{header.subHeading}</h1>
            {/* <p className="mainContent">{header.text}</p> */}
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  {/* <div className="services__box-p">{info.text}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

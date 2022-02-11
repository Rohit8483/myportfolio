import React from "react";
import "./Project.css"

const Project = () => {
  const [header] = React.useState({
    // mainHeader: "CHOOSE A PLAN",
    subHeading: "Projects",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "American Eagle Clone",
      img: "./images/american.png",
      link: "https://rubyroy21.github.io/American-Eagle/",
      // msg2: "20GB Monthly Bandwidth",
    },
    {
      id: 2,
      heading: "Smallcase Clone",
      img: "./images/smallcase.png",
      link: "none",
      // msg2: "20GB Monthly Bandwidth",
    },
    // {
    //   id: 3,
    //   heading: "Unit 5",
    //   price: "img",
    //   msg1: "none",
    //   // msg2: "20GB Monthly Bandwidth",

    // },
  ]);
  return (
    <div className="prices" id="Projects">
      <div className="container">
        <div className="common">
          {/* <h3 className="heading">{header.mainHeader}</h3> */}
          <h1 className="mainHeader">{header.subHeading}</h1>
          {/* <p className="mainContent">{header.text}</p> */}
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-40" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <img className="imgx" src={prices.img} alt=""></img>
                </div>

                {/* <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                </ul> */}
                <div className="price__btn">
                  <a href={prices.link} target="_blank" className="btn btn-outline">
                    link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

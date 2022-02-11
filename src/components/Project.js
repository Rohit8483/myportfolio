import React from "react";

const Project = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "American Eagle Clone",
      img: "./images/american.png",
      link: "https://rubyroy21.github.io/American-Eagle/",
    },
    {
      id: 2,
      heading: "Smallcase Clone",
      img: "./images/smallcase.png",
      link: "none",
    },
  ]);
  return (
    <div className="prices" id="Projects">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>

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

                <div className="price__btn">
                  <a
                    href={prices.link}
                    className="btn btn-outline"
                  >
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

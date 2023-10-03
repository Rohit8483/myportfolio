import React from "react";
import { FaGithub, FaShareSquare } from "react-icons/fa";

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
      repolink: "https://github.com/Rohit8483/American-Eagle",
      p: "American Eagle is a leading global specialty retailer offering high-quality, on-trend clothing and accessories at affordable prices. We try to build a American Eagle clone using Html, CSS, and JavaScript.",
    },
    {
      id: 2,
      heading: "Smallcase Clone",
      img: "./images/smallcase.png",
      link: "https://smallcase-clone.netlify.app/",
      repolink: "https://github.com/Rohit8483/smallcase",
      p: "smallcase is modern investment portfolio that help users build a low cost, secure, long term & diversified portfolio, we have cloned using Html, CSS, and JavaScript and json-server.",
    },
    {
      id: 3,
      heading: "Airbnb Clone",
      img: "./images/front.png",
      link: "https://airbnb-clone-snowy-three.vercel.app/",
      repolink: "https://github.com/Rohit8483/Airbnb-Clone",
      p: "Airbnb is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. We build this website using ReactJS. ",
    },
    {
      id: 4,
      heading: "React-Redux Ecom Project",
      img: "./images/rere.png",
      link: "",
      repolink: "https://github.com/Rohit8483/react-redux-e-com-project",
      p: "In this project, I have created the products listing page and product details page using React and Redux for state management with Diffrent libraries to make it more functional.",
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
          {state.map((project) => (
            <div className="col-40" key={project.id}>
              <div className="price">
                <div className="priceHeading">{project.heading}</div>
                <div className="price__rs">
                  <img className="imgx" src={project.img} alt=""></img>
                </div>
                <p id="desc">{project.p}</p>

                <div className="price__btn">
                  <a
                    href={project.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <FaShareSquare
                      style={{
                        fontSize: "22px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
                  </a>
                  <a
                    href={project.repolink}
                    className="btn btn-outline"
                    id="descShow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      style={{
                        fontSize: "25px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
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

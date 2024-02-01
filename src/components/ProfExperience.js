import React, { useState } from "react";

const ProfExp = () => {
  const [header] = useState({
    subHeader: "Professional Experience",
  });
  return (
    <div className="about" id="Exp">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-7">
            <div className="about__info">
              <div className="about__info-p1">
                <h3>GlobalLogic, Software Engineer</h3>
                <div className="rowContainer">
                  <h4 className="headingExp">Project:</h4>
                  <>Verizon(Telecommunication domain) Mar 2022 - Present</>
                </div>
                <div className="rowContainer">
                  <h4 className="headingExp">Tech Stack:</h4>
                  <br/>

                  <div>
                    React, Redux, Javascript, React Testing Library, Styled
                    Components, Webpack, Jenkins, GitLab, ESLint, Lighthouse
                  </div>
                </div>
                <div className="rowContainer">
                  <h4 className="headingExp">Areas of responsibility</h4>
                  <br/>
                  <div>
                    1. Improvised Component Design using client library and Styled
                    Component Library of old repositories. 
                    <br/>
                    2. Covered Unit Testing
                    up by 80% and increased the performance of the application
                    by 50%. 
                    <br/>
                    3. Fixed over 80% of production bugs in pre production
                    environment. 
                    <br/>
                    4. Implemented accessibility functionality using
                    the NVDA tool. 
                    <br/>
                    5. Worked on user stories, Optimizing performance
                    in a React app. 
                    <br/>
                    6. Debugging & Performances testing using
                    Lighthouse, Profiler, SRE tool, New Relic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfExp;

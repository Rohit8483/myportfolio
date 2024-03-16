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
                <div className="rowContainerExp">
                  <h4 className="headingExp">Project:</h4>
                  <>Verizon 5G, Sept 2023 - Present</>
                </div>
                <div className="rowContainerExp">
                  <h4 className="headingExp">Tech Stack:</h4>
                  <div>
                    React, JavaScript, Redux, Saga, React Profiler, Chrome
                    DevTools, Lighthouse, NewRelic, Webpack, Redux toolkit,
                    GitLab, Axios, Kibana
                  </div>
                </div>
                <div className="rowContainerExp">
                  <h4 className="headingExp">Areas of responsibility</h4>
                  <div>
                    1. Analyzed and improved rendering speed and load times by
                    identifying performance bottlenecks.
                    <br />
                    2. Optimized bundle size and initial load times through lazy
                    loading and code splitting.
                    <br />
                    3. Prefetched and preloaded the resources required for
                    upcoming navigation that can reduce latency and improve
                    perceived performance.
                    <br />
                    4. Identified the api's with static response and payload for
                    prefetch which improved around 6-8 seconds of overall load
                    time.
                    <br />
                    5. Minifying and compressing JavaScript, CSS, images, as
                    well as removing unused code, to reduce bundle size and
                    improve loading speed by finely configuring webpack
                    <br />
                    6. Code reviews with a focus on performance optimization
                    strategies.
                    <br />
                    7. Documented performance improvements and shared best
                    practices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  h-650 alignCenter">
          <div className="col-7">
            <div className="about__info">
              <div className="about__info-p1">
                <h3>GlobalLogic, Associate Software Engineer</h3>
                <div className="rowContainerExp">
                  <h4 className="headingExp">Project:</h4>
                  <>Verizon (Telecommunication domain), Mar 2022 - Sept 2023</>
                </div>
                <div className="rowContainerExp">
                  <h4 className="headingExp">Tech Stack:</h4>
                  <div>
                    React, Redux, Thunk, Javascript, React Testing Library,
                    Styled Components, Webpack, Jenkins, GitLab, ESLint,
                    Material UI.
                  </div>
                </div>
                <div className="rowContainerExp">
                  <h4 className="headingExp">Areas of responsibility</h4>
                  <div>
                    1. Improvised Component Design using client library(Verizon
                    Design system) and Styled Component Library in old
                    repositories.
                    <br />
                    2. Built reusable components and collaborated with backend
                    developers and designers.
                    <br />
                    3. Worked on features like custom form validation, custom
                    notification banners, react forms.
                    <br />
                    4. Achieved 80% unit test coverage and fixed 80% of
                    production bugs.
                    <br />
                    5. Ensured Accessibility functionality using the NVDA tool
                    for specially abled persons.
                    <br />
                    6. Worked on user stories in all sprints as per the task
                    from the client by writing clean, maintainable code adhering
                    to established coding standard.
                    <br />
                    7. Tested end-to-end flows and provided production support.
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

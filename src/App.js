import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import ProfExp from "./components/ProfExperience";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <ProfExp />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

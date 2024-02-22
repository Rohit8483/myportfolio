import React, { lazy, Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
// Lazy load your components
const ProfExp = lazy(() => import("./components/ProfExperience"));
const Skills = lazy(() => import("./components/Skills"));
const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Nav />
        <About />
        <ProfExp />
        <Skills />
        <Project />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

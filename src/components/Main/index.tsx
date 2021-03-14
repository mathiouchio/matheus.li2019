import React from "react";
import Splash from "./Splash";
import Intro from "./Intro";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import FinePrint from "./FinePrint";
import ErrorBoundary from "../ErrorBoundary";

const Main = () => (
  <main>
    <ErrorBoundary>
      <Splash />
      <Intro />
      <Projects />
      <Blogs />
      <Contact />
      <FinePrint />
    </ErrorBoundary>
  </main>
);

export default Main;

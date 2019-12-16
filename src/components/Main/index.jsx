import React from "react";
import Splash from "./Splash";
import Intro from "./Intro";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import FinePrint from "./FinePrint";
import ErrorBoundary from "../ErrorBoundary";
import ErrorMessage from "./errorMessage";

const Main = () => (
  <content>
    <ErrorBoundary Fallback={ErrorMessage}>
      <Splash />
      <Intro />
      <Projects />
      <Blogs />
      <Contact />
      <FinePrint />
    </ErrorBoundary>
  </content>
);

export default Main;

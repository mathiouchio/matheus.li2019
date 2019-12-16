import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main";
import Popup from "./Popup";
import Nav from "./Nav";
import Aside from "./Aside";
import { Notice, Preload } from "./Misc";

import { scrollspy, popup, nav } from "./_actions";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  useEffect(() => {
    // route.init(); // @todo: remove
    scrollspy.init();
    nav.init();
    popup.destroy();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Nav />
        <Main />
        <Aside />
        <Notice />
        <Popup />
        <Preload />
      </Router>
    </ErrorBoundary>
  );
};

export default App;

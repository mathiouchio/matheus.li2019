import React from "react";
import { Route, Switch } from "react-router-dom";

import PopupWrapper from "./component";

const Popup = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/" component={PopupWrapper} />
  </Switch>
);

Popup.propTypes = {};

Popup.defaultProps = {};

export default Popup;

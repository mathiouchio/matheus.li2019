import React from "react";
import PropTypes from "prop-types";
import { danger } from "../../_actions/dom";

const Standard = props => {
  const { loaded, location } = props;
  if (!loaded) return null;

  const {
    state: { content }
  } = location;

  return (
    <li className="article portrait" data-show>
      <div
        className="wrapper"
        dangerouslySetInnerHTML={danger(content.rendered)}
      />
    </li>
  );
};

Standard.propTypes = {
  loaded: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

export default Standard;

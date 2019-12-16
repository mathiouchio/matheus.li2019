import React from "react";
import PropTypes from "prop-types";

const Submit = ({ handleSubmit }) => (
  <div
    className="expand"
    onClick={handleSubmit}
    // data-hidden={this.props.response ? "" : null}
  >
    <a id="formsubmit">
      <svg x="0px" y="0px" viewBox="0 0 40 40">
        <line x1="25.3" y1="20" x2="14.7" y2="20" />
        <line x1="20" y1="14.7" x2="20" y2="25.3" />
        <circle fill="none" cx="20" cy="20" r="12" />
      </svg>
      <span className="hero smler">Send</span>
    </a>
  </div>
);

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Submit;

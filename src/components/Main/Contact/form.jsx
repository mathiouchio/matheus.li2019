import React from "react";
import PropTypes from "prop-types";
import { WPLOCAL } from "../../_constants";

const Form = ({ handleValidate, handleChange }) => {
  return (
    <div className="copy">
      <form
        id="contactform"
        action={`${WPLOCAL.templateURL}contact.php`}
        method="post"
      >
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleValidate}
            placeholder="type your email"
            required
          />
        </div>
        <div>
          <label>message</label>
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            onBlur={handleValidate}
            placeholder="type message ..."
            required
          />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleValidate: PropTypes.func.isRequired
};

export default Form;

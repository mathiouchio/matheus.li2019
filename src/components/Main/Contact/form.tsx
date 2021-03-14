import React, { FC } from "react";

import { WPLOCAL } from "../../_constants";

interface FormProps {
  handleChange: Function,
  handleValidate: Function
}

const Form: FC<FormProps> = ({ handleValidate, handleChange }) => {
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
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleValidate(event)}
            placeholder="type your email"
            required
          />
        </div>
        <div>
          <label>message</label>
          <textarea
            name="message"
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleValidate(event)}
            placeholder="type message ..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Form;

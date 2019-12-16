import React, { useState } from "react";
import Online from "./online";
import Form from "./form";
import Submit from "./submit";
import Response from "./response";
import { post, sanitize } from "../../_actions";

const Contact = () => {
  const [errors, setError] = useState([null, null]);
  const [value, setValue] = useState({
    email: "",
    message: ""
  });
  const [response, setResponse] = useState({ code: null, message: "" });

  const handleChange = ({ currentTarget }) => {
    if (currentTarget.type == "email") {
      setValue({
        email: currentTarget.value,
        message: value.message
      });
    }
    if (currentTarget.type == "textarea") {
      setValue({
        email: value.email,
        message: sanitize(currentTarget.value)
      });
    }
  };

  const handleValidate = ({ currentTarget }) => {
    const email_reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (currentTarget.type == "email") {
      if (email_reg.test(currentTarget.value.trim())) {
        setError([false, errors[1]]);
        delete currentTarget.dataset.invalid;
      } else {
        setError([true, errors[1]]);
        currentTarget.dataset.invalid = "";
      }
    }

    if (currentTarget.type == "textarea") {
      if (currentTarget.value.trim()) {
        setError([errors[0], false]);
        delete currentTarget.dataset.invalid;
      } else {
        setError([errors[0], true]);
        currentTarget.dataset.invalid = "";
      }
    }
  };

  const passCheck = () => {
    let pass = true;
    errors.forEach(error => {
      if (error === true || error === null) pass = false;
    });

    return pass;
  };

  const handleSubmit = () => {
    if (passCheck()) {
      post({
        url: "http://matheus.li/blog/wp-content/themes/matheus/contact.php",
        inputs: value
      }).then(res => {
        console.log(res);
      });
    }
  };

  return (
    <section id="contact">
      <div className="slider noslide">
        <div className="slides">
          <div className="slide">
            <div className="wrapper">
              <Online />
              {response.code ? (
                <Response response={response} />
              ) : (
                <Form
                  handleChange={handleChange}
                  handleValidate={handleValidate}
                />
              )}

              <Submit handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

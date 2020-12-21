import React from "react";

const Contact = ({ response }) => response.code === 200 ? (
  <div className="thanks">
    <h2>I receive your message</h2>
    <p>Will get back to you shortly.</p>
  </div>
) : (
  <div className="error">
    <h2>Error</h2>
    <p>{response}</p>
  </div>
);

export default Contact;

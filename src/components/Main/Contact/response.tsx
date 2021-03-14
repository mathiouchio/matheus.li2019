import React, { FC } from "react";

interface ResponseProps {
  code: number,
  message: string
}

const Response: FC<ResponseProps> = ({code, message}) => code === 200 ? (
  <div className="thanks">
    <h2>I receive your message</h2>
    <p>Will get back to you shortly.</p>
  </div>
) : (
  <div className="error">
    <h2>Error</h2>
    <p>{message}</p>
  </div>
);

export default Response;

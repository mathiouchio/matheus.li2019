import React, { FC } from "react";

interface ErrorMessageProp {
  errMessage: string
}

const ErrorMessage: FC<ErrorMessageProp> = ({errMessage}) => (
  <section id="logo">
    <div className="wrapper">{errMessage}</div>
  </section>
);

export default ErrorMessage;

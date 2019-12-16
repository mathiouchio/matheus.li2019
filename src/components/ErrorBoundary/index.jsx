import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { children, Fallback } = this.props;
    const errMessage = "Something went wrong.";
    if (this.state.hasError) {
      if (Fallback) {
        return Fallback(errMessage);
      }

      // You can render any custom fallback UI
      return <h1>{errMessage}</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  Fallback: PropTypes.func
};

ErrorBoundary.propTypes = {
  Fallback: () => {}
};

export default ErrorBoundary;

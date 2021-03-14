import * as React from "react";

interface PropsType {
  children: React.ReactNode
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const errMessage = "Something went wrong.";
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{errMessage}</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;

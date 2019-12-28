import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary";
import Slides from "./Slides";
import Controller from "./Controller";
import { get } from "../_actions";
import { REQUEST } from "../_constants";

const PopupWrapper = props => {
  const { location } = props;
  const defaultState = { data: [], loaded: false };
  const [data, setData] = useState(defaultState);
  const [metaData, setMetaData] = useState({
    currentslide: 1,
    previouslide: 1,
    muted: true
  });
  const [portraits, setPortraits] = useState([]);

  const state = {
    ...props,
    ...data,
    metaData,
    setMetaData,
    portraits,
    setPortraits
  };

  useEffect(
    () => {
      handleFetch();
    },
    [location]
  );

  const handleFetch = () => {
    const { id } = location.state;

    get(REQUEST.POPUP(id)).then(res => {
      setData({ data: res, loaded: true });
    });
  };

  return (
    <ErrorBoundary>
      <div id="popup" data-active={location.pathname}>
        <Slides {...state} />
        {/* <Spinner /> */}
        <Controller {...state} />
      </div>
    </ErrorBoundary>
  );
};

PopupWrapper.propTypes = {
  location: PropTypes.object.isRequired
};

export default PopupWrapper;

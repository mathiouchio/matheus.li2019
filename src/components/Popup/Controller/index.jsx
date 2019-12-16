import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CONTROL, POST_TYPE } from "../../_constants";

const Controller = props => {
  const { location, loaded, data, metaData, setMetaData } = props;
  const { currentslide, muted, portrait } = metaData;
  if (!location.state) return null;

  const {
    state: { format }
  } = location;
  if (!loaded) return null;

  const totalslide = data.length;

  const handleCurrentSlideLocation = e => {
    const type = e.target.dataset.control;
    if (type === CONTROL.PREV) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    let nextSlide = currentslide + 1;

    if (currentslide < totalslide) {
      setMetaData({
        previouslide: currentslide,
        currentslide: nextSlide
      });
    }
  };

  const handlePrev = () => {
    let nextSlide = currentslide - 1;

    if (currentslide > 1) {
      setMetaData({
        previouslide: currentslide,
        currentslide: nextSlide
      });
    }
  };

  return (
    <div
      className="controller"
      data-video={format == POST_TYPE.VIDEO ? "" : null}
      data-single={format == POST_TYPE.STANDARD || totalslide < 2 ? "" : null}
    >
      <span data-control={CONTROL.CLOSE}>
        <Link
          to={{
            pathname: `/`,
            state: {}
          }}
        >
          {CONTROL.CLOSE}
        </Link>
      </span>
      <i>{currentslide}</i>
      <divider> / </divider>
      <c>{totalslide}</c>
      <t>{format}</t>
      <span data-control={CONTROL.PREV} onClick={handleCurrentSlideLocation}>
        {CONTROL.PREV}
      </span>
      <span data-control={CONTROL.NEXT} onClick={handleCurrentSlideLocation}>
        {CONTROL.NEXT}
      </span>
      {format == POST_TYPE.VIDEO && (
        <mute data-control={CONTROL.MUTE}>{muted ? "unmute" : "mute"}</mute>
      )}
      <fs data-control={CONTROL.FULLSCREEN}>{CONTROL.FULLSCREEN}</fs>
      {portrait && <scroll>scroll</scroll>}
    </div>
  );
};

Controller.propTypes = {
  data: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  metaData: PropTypes.shape({
    currentslide: PropTypes.number.isRequired,
    previouslide: PropTypes.number.isRequired,
    portrait: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired
  }),
  setMetaData: PropTypes.func.isRequired
};

Controller.defaultProps = {
  portrait: false
};

export default Controller;

import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CONTROL, POST_TYPE } from "../../_constants";

interface ControllerProps {
  data: Array<Object>,
  loaded: Boolean,
  location: {
    state: {
      format: string
    }
  },
  metaData: {
    currentslide: number,
    previouslide: number,
    muted: Boolean
  },
  portraits: Array<Boolean>,
  setMetaData: Function
};

const Controller: FC<ControllerProps> = (props) => {
  const { location, loaded, data, metaData, setMetaData, portraits } = props;
  const { currentslide, muted } = metaData;
  const currentIndex = -1 + currentslide;
  if (!location.state) return null;

  const {
    state: { format }
  } = location;
  if (!loaded) return null;

  const totalslide = data.length;

  const handleCurrentSlideLocation = (event: React.MouseEvent<HTMLElement>) => {
    const type = event.currentTarget.getAttribute("data-control");

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
    console.log("currentslide", currentslide);
    let nextSlide = currentslide - 1;
    console.log("nextSlide", nextSlide);

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
      <span className="currentslide">{currentslide}</span>
      <span className="divider"> / </span>
      <span className="totalslide">{totalslide}</span>
      <span className="postFormat">{format}</span>
      <span data-control={CONTROL.PREV} onClick={handleCurrentSlideLocation}>
        {CONTROL.PREV}
      </span>
      <span data-control={CONTROL.NEXT} onClick={handleCurrentSlideLocation}>
        {CONTROL.NEXT}
      </span>
      {format == POST_TYPE.VIDEO && (
        <span className="mute" data-control={CONTROL.MUTE}>{muted ? "unmute" : "mute"}</span>
      )}
      <span className="fullscreen" data-control={CONTROL.FULLSCREEN}>{CONTROL.FULLSCREEN}</span>
      {portraits[currentIndex] && <span className="scroll">scroll</span>}
    </div>
  );
};

export default Controller;

import React from "react";
import PropTypes from "prop-types";

import { POST_TYPE } from "../../_constants";

import Gallery from "./gallery";
import Standard from "./standard";
import Video from "./video";

const Slides = props => {
  console.log(props.location);
  if (!props.location.state) return null;
  const {
    location: {
      state: { format }
    }
  } = props;

  return (
    <div className="slider">
      <div className="content">
        <ul>
          {format === POST_TYPE.GALLERY && <Gallery {...props} />}
          {format === POST_TYPE.STANDARD && <Standard {...props} />}
          {format === POST_TYPE.VIDEO && <Video {...props} />}
        </ul>
      </div>
    </div>
  );
};

Slides.propTypes = {
  location: PropTypes.object.isRequired
};

export default Slides;

import React from "react";
import PropTypes from "prop-types";

const Video = ({ data, metaData }) => {
  const { currentslide, previouslide } = metaData;

  let Videos = [];
  data.fields.videos.map((video, index) => {
    const youmeo = video.youtube_id ? "youtube" : "vimeo";

    const vid = youmeo ? video.youtube_id : video.vimeo_id;

    const videoEl = video.video_url ? (
      <video controls>
        <source src={video.video_url} type="video/mp4" />
      </video>
    ) : (
      <div data-type={youmeo} data-video-id={vid} />
    );
    Videos.push(
      <li
        data-show={index == currentslide ? "" : null}
        data-transitioning={index == previouslide ? "" : null}
        key={vid || video.video_url}
        ref={video.id}
      >
        {videoEl}
      </li>
    );
  });

  return Videos;
};

Video.propTypes = {
  data: PropTypes.array.isRequired,
  metaData: PropTypes.shape({
    currentslide: PropTypes.number.isRequired,
    previouslide: PropTypes.number.isRequired,
    portrait: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired
  })
};

export default Video;

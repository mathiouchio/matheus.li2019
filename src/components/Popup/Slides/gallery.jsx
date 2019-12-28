import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { POST_TYPE } from "../../_constants";

const imgAttr = data => {
  const imagesets = {
    sizes: ["full", "gallery-medium-large", "gallery-medium", "gallery-small"]
  };
  let output = {
    srcset: [],
    sizes: ["100vw"]
  };

  // let once = true;

  /** Build srcset
       *  Collecting assets
       *  srcset="http://matheus.li/wp-content/uploads/2017/08/disney-jr-768x914.jpg 768w,
                  http://matheus.li/wp-content/uploads/2017/08/disney-jr-1400x1666.jpg 1400w"
       *
       ** Build sizes
       *  setting attribute for viewport sizes
       *  sizes="(min-width: 1400px) 2560px,
                 (min-width: 768px) 1400px,
                 (min-width: 320px) 768px, 100vw"
       *
       */

  // looking for imagesets.sizes matched key strings
  Object.entries(data.sizes).forEach(value => {
    const key = value[0];
    const imgData = value[1];

    imagesets.sizes.includes(key) &&
      output["srcset"].push(`${imgData.source_url} ${imgData.width}w`);
  });

  output.srcset.reverse();

  return output;
};

const portraitDetector = attr => {
  return attr ? attr.media_details.height > attr.media_details.width : false;
};

const Gallery = props => {
  const {
    loaded,
    data,
    metaData,
    setMetaData,
    portraits,
    setPortraits
  } = props;
  const { currentslide, previouslide, muted } = metaData;
  const [imgLoaded, setImgLoaded] = useState([]);
  let Slides = [];

  useEffect(
    () => {
      if (loaded) {
        setMetaData({
          currentslide: currentslide,
          previouslide: previouslide,
          muted: muted
        });
      }
    },
    [currentslide]
  );

  if (!loaded) return null;

  const handleLoadedState = (index, attr) => {
    let newImgLoaded;
    if (imgLoaded.length > 0) {
      newImgLoaded = [...imgLoaded];
    } else {
      newImgLoaded = [];
    }
    newImgLoaded.splice(index, 0, true);

    let newPortraits = [...portraits];
    newPortraits.splice(index, 0, portraitDetector(attr));

    setPortraits(newPortraits);
    setImgLoaded(true);
  };

  data.map((attr, index) => {
    const dataIndex = index + 1;

    // className generator
    let slideClassName = POST_TYPE.GALLERY;
    if (portraitDetector(attr)) {
      slideClassName += " portrait";
    }

    // srcSetSizes generator
    const srcsetSizes = imgAttr(attr.media_details);
    const imgSizes = srcsetSizes.sizes.join(", ");
    const imgSrcset = srcsetSizes.srcset.join(", ");

    Slides.push(
      <li
        className={slideClassName}
        key={attr.id}
        // ref={attr.id}
        data-show={dataIndex === currentslide ? "" : null}
        data-transitioning={dataIndex == previouslide ? "" : null}
        data-loaded={imgLoaded}
      >
        <img
          src={attr.source_url}
          width={attr.media_details.width}
          height={attr.media_details.height}
          srcSet={imgSrcset}
          sizes={imgSizes}
          onLoad={() => handleLoadedState(index, attr)}
        />
      </li>
    );
  });

  return Slides;
};

Gallery.propTypes = {
  loaded: PropTypes.bool.isRequired,
  data: PropTypes.array,
  metaData: PropTypes.shape({
    currentslide: PropTypes.number.isRequired,
    previouslide: PropTypes.number.isRequired,
    muted: PropTypes.bool.isRequired
  }),
  portraits: PropTypes.array.isRequired,
  setPortraits: PropTypes.func.isRequired,
  setMetaData: PropTypes.func.isRequired
};

Gallery.defaultProps = {
  data: []
};

export default Gallery;

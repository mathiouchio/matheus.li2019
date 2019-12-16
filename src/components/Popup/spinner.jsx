import React from "react";
import { WPLOCAL } from "../_constants";

const Spinner = () => (
  <div id="spinner">
    <svg x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
      <defs>
        <polygon
          id="spinner1"
          points="11.8,2.8 16,30.5 31.7,45.3 41,35.8 43,23.3"
        />
      </defs>
      <clipPath id="spinner2">
        <use xlinkHref="#spinner1" overflow="visible" />
      </clipPath>
      <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#spinner2)">
        <image
          overflow="visible"
          width="2179"
          height="2967"
          xlinkHref={`${WPLOCAL.templateURL}assets/images/wood.jpg`}
        />
      </g>
    </svg>
    <span>loading post</span>
  </div>
);

export default Spinner;

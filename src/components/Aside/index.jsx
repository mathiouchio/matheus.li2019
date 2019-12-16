import React from "react";

const Aside = () => (
  <aside id="branding">
    <svg x="0px" y="0px" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <g>
        <polygon
          className="static"
          fill="#FFFFFF"
          points="0,0 189.3,0 39.4,69.4 0,152.5 60.6,360.5 119.3,649.8 133.2,725.4 71.8,899.8 0,899.8"
        />
      </g>
      <g fillRule="evenodd" clipRule="evenodd" className="wood">
        <defs>
          <polygon
            id="SVGID_1_"
            points="167.4,629.6 128.9,459.2 52.9,130 180.9,59.2 348.8,0 189.3,0 39.4,69.4 0,152.5 60.6,360.5 119.3,649.8 133.2,725.4 71.8,899.8 97.6,899.8 149.9,815.2"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#SVGID_2_)">
          <image
            overflow="visible"
            width="2560"
            height="2200"
            id="texture-mockup_xA0_Image_2_"
            xlinkHref="https://matheus.li/blog/wp-content/themes/matheus/assets/images/wood.jpg"
            transform="matrix(0.6035 0 0 0.6035 -310.0406 0)"
          />
        </g>
      </g>
      <g fillRule="evenodd" clipRule="evenodd" className="marble">
        <defs>
          <polygon
            id="SVGID_3_"
            points="516.1,0 189.3,122.7 100.9,165.4 140.9,389.8 167.4,629.6 149.9,815.2 97.6,899.8 97.6,899.8 149.9,815.2 167.4,629.6 128.9,459.2 52.9,130 180.9,59.2 348.8,0"
          />
        </defs>
        <clipPath id="SVGID_4_">
          <use xlinkHref="#SVGID_3_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#SVGID_4_)">
          <image
            overflow="visible"
            enableBackground="new    "
            width="2000"
            height="3008"
            xlinkHref="https://matheus.li/blog/wp-content/themes/matheus/assets/images/marble.jpg"
            transform="matrix(0.3004 0 0 0.3004 -114.008 -5.4869)"
          />
        </g>
      </g>
    </svg>
  </aside>
);

export default Aside;

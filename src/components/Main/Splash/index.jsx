import React, { useEffect } from "react";
import { scrollspy } from "../../_actions";

const Splash = () => {
  useEffect(() => {
    scrollspy.calcPositions();
  });

  return (
    <section id="logo">
      <div className="wrapper">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 180 200"
          enableBackground="new 0 0 180 200"
        >
          <g>
            <defs>
              <polygon
                id="SVGID_21_"
                points="117,122 167.5,132 180,127.7 103.9,76.5 46.4,81.7 27.8,51.7 0,69.9 12.9,100.6 64.5,125.2"
              />
            </defs>
            <clipPath id="SVGID_22_">
              <use href="#SVGID_21_" overflow="visible" />
            </clipPath>
            <g clipPath="url(#SVGID_22_)">
              <image
                overflow="visible"
                width="2000"
                height="3008"
                id="jAS1KY_23_"
                href="https://matheus.li/blog/wp-content/themes/matheus/assets/images/marble.jpg"
                transform="matrix(0.1333 -0.1693 0.1693 0.1333 -113.2185 51.2904)"
              />
            </g>
          </g>
          <g>
            <defs>
              <polygon
                id="SVGID_23_"
                points="170.7,32 81.5,0 73.2,24.4 27.8,51.7 46.4,81.7 103.9,76.5 180,127.7"
              />
            </defs>
            <clipPath id="SVGID_24_">
              <use href="#SVGID_23_" overflow="visible" />
            </clipPath>
            <g clipPath="url(#SVGID_24_)">
              <image
                overflow="visible"
                width="2179"
                height="2967"
                href="https://matheus.li/blog/wp-content/themes/matheus/assets/images/wood.jpg"
                transform="matrix(0.1188 -5.931289e-02 5.931289e-02 0.1188 -152.2424 -90.0538)"
              />
            </g>
          </g>
          <g>
            <defs>
              <polygon
                id="SVGID_25_"
                points="167.5,132 117,122 64.5,125.2 12.9,100.6 54.5,200"
              />
            </defs>
            <clipPath id="SVGID_26_">
              <use href="#SVGID_25_" overflow="visible" />
            </clipPath>
            <g
              transform="matrix(1 0 0 1 -3.814697e-06 0)"
              clipPath="url(#SVGID_26_)"
            >
              <image
                overflow="visible"
                width="2179"
                height="2967"
                href="https://matheus.li/blog/wp-content/themes/matheus/assets/images/wood.jpg"
                transform="matrix(0.1356 1.322225e-02 -1.322225e-02 0.1356 -24.2574 -163.8912)"
              />
            </g>
          </g>
          <g>
            <path
              fill="#FFFFFF"
              d="M56.3,152.8c0,3.2-2.2,5.1-4.6,5.1h-4.3v-10.1h4.3C54.1,147.7,56.3,149.6,56.3,152.8z M55.1,152.8
            c0-2.2-1.4-4-3.5-4h-3.1v7.9h3.1C53.8,156.8,55.1,155,55.1,152.8z"
            />
            <path
              fill="#FFFFFF"
              d="M61.6,148.8v3.4h5.6v1.1h-5.6v3.4h6.3v1.1h-7.4v-10.1h7.4v1.1H61.6z"
            />
            <path
              fill="#FFFFFF"
              d="M79.5,155c0,1.9-1.5,2.9-4,2.9c-3,0-4.2-1.3-4.4-3.1h1.2c0.1,1.5,1.5,2.1,3.3,2.1c1.7,0,2.8-0.6,2.8-1.8
            c0-2.5-6.9-1.2-6.9-4.7c0-1.6,1.3-2.8,3.8-2.8c2.7,0,3.9,1.4,4,2.9H78c-0.1-1-1-1.8-2.8-1.8c-2.3,0-2.7,1-2.7,1.7
            C72.5,152.7,79.5,151.5,79.5,155z"
            />
            <path fill="#FFFFFF" d="M84.7,157.8h-1.1v-10.1h1.1V157.8z" />
            <path
              fill="#FFFFFF"
              d="M98.4,150.5h-1.3c-0.6-1.1-1.7-1.8-3.2-1.8c-2.5,0-3.9,1.8-3.9,4.1s1.4,4.1,3.9,4.1c1.8,0,3.6-1.2,3.6-3.3
            h-3.7v-1h4.7v5.4h-1.1V156c-0.6,1-1.8,1.9-3.7,1.9c-3.1,0-4.9-2.3-4.9-5.2c0-2.9,1.9-5.2,5-5.2C96,147.6,97.6,148.8,98.4,150.5z"
            />
            <path
              fill="#FFFFFF"
              d="M111.5,147.7v10.1h-1.3l-6.2-8.5v8.5h-1.1v-10.1h1.3l6.2,8.5v-8.5H111.5z"
            />
            <path
              fill="#FFFFFF"
              d="M117.4,148.8v3.4h5.6v1.1h-5.6v3.4h6.3v1.1h-7.4v-10.1h7.4v1.1H117.4z"
            />
            <path
              fill="#FFFFFF"
              d="M129,157.8h-1.1v-10.1h4.8c2.1,0,3.4,1.2,3.4,3.2c0,2-1.3,2.6-2.4,2.9l2.7,4.1h-1.4l-2.4-3.9H129V157.8z
             M129,152.9h3.5c1.1,0,2.5-0.4,2.5-2c0-1.3-1-2.1-2.4-2.1H129V152.9z"
            />
          </g>
        </svg>
        <span>scroll down to navigate</span>
      </div>
    </section>
  );
};

export default Splash;

import React, { useEffect, useState, createRef } from "react";
import { Link } from "react-router-dom";

import { get, ohSnap, scrollspy } from "../../_actions";
import { REQUEST } from "../../_constants";

const Blog = () => {
  const [data, setData] = useState({ data: [], loaded: false });
  const slidesContainer = createRef();

  const handleFetch = target => {
    const url = target ? REQUEST.POPUP(target) : REQUEST.POSTS;

    get(url).then(res => {
      setData({ data: res, loaded: true });
    });
  };

  const handleHover = e => {
    if (e.type == "mouseenter") ohSnap(e.currentTarget, 1);
    else ohSnap(e.currentTarget, 0);
  };

  const handleExpand = () => {
    if (slidesContainer.current.dataset.expanded) {
      delete slidesContainer.current.dataset.expanded;
    } else {
      slidesContainer.current.dataset.expanded = null;
    }

    // recalculate on expansion
    setTimeout(() => {
      scrollspy.calcPositions();
    }, 300);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(
    () => {
      // recalculate on fetch complete
      scrollspy.calcPositions();
    },
    [data]
  );

  return (
    <section id="posts" className="slider noslide">
      {!data.loaded ? (
        "Loading..."
      ) : (
        <div className="slides" ref={slidesContainer}>
          <div className="slide">
            <div className="wrapper">
              <ul>
                {data.data.map(blog => {
                  const featured = blog.better_featured_image;
                  const { id } = blog;
                  if (featured) {
                    const thumb = featured.media_details.sizes.thumbnail;
                    const linkURL = new URL(blog.link);
                    // const arrURL = linkURL.pathname.split("/");
                    const postType = "posts";
                    // const postName = arrURL[1];

                    if (thumb)
                      return (
                        <li key={id}>
                          <div className="post">
                            <Link
                              to={{
                                pathname: `/${postType}${linkURL.pathname}`,
                                state: blog
                              }}
                            >
                              <div
                                className="thumb"
                                onMouseEnter={handleHover.bind(this)}
                                onMouseLeave={handleHover.bind(this)}
                              >
                                <svg x="0px" y="0px" viewBox="0 0 180 200">
                                  <g fillRule="evenodd" clipRule="evenodd">
                                    <defs>
                                      <polygon
                                        id={`SVGID_thumb_${id}_`}
                                        points="57,199,1,72,113,1,163,30,161,113"
                                      />
                                    </defs>
                                    <clipPath id={`SVGID_thumb_a_${id}_`}>
                                      <use
                                        xlinkHref={`#SVGID_thumb_${id}_`}
                                        overflow="visible"
                                      />
                                    </clipPath>
                                    <g clipPath={`url(#SVGID_thumb_a_${id}_)`}>
                                      <image
                                        overflow="visible"
                                        width="300"
                                        height="300"
                                        xlinkHref={thumb.source_url}
                                        transform="matrix(0.6666666666666666,0,0,0.6666666666666666,-10,0)"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                  }
                })}
              </ul>
              <div className="expand" onClick={handleExpand}>
                <a>
                  <svg x="0px" y="0px" viewBox="0 0 40 40">
                    <line x1="25.3" y1="20" x2="14.7" y2="20" />
                    <line x1="20" y1="14.7" x2="20" y2="25.3" />
                    <circle fill="none" cx="20" cy="20" r="12" />
                  </svg>
                  <span className="hero smler">Expand</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;

import React, { useState, useEffect } from "react";
import { danger, get, scrollspy } from "../../_actions";
import { REQUEST } from "../../_constants";
import Link from "./link";

const Projects = () => {
  const [data, setData] = useState({ data: [], loaded: false });

  const handleFetch = () => {
    get(REQUEST.PORTFOLIOS).then(res => {
      setData({ data: res, loaded: true });
    });
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
    <section id="portfolio" className="slider noslide">
      {!data.loaded ? (
        "Loading..."
      ) : (
        <div className="slider noslide">
          <div className="slides" data-expanded={true}>
            <ul>
              {data.data.map(project => {
                const { link, id } = project;

                return (
                  <li className="slide" key={id}>
                    <div className="wrapper">
                      <h1>{project.title.rendered}</h1>
                      <div
                        className="copy"
                        dangerouslySetInnerHTML={danger(
                          project.content.rendered
                        )}
                      />
                      <div className="expand">
                        <Link url={link} project={project} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ProjectLinkProps {
  project: Object
  url: string
}

const ProjectLink: FC<ProjectLinkProps> = ({ url, project }) => {
  const linkURL = new URL(url);

  return (
    <Link
      to={{
        pathname: linkURL.pathname,
        state: project
      }}
    >
      <svg x="0px" y="0px" viewBox="0 0 40 40">
        <line x1="25.3" y1="20" x2="14.7" y2="20" />
        <line x1="20" y1="14.7" x2="20" y2="25.3" />
        <circle fill="none" cx="20" cy="20" r="12" />
      </svg>
      <span className="hero smler">Learn more</span>
    </Link>
  );
};

export default ProjectLink;

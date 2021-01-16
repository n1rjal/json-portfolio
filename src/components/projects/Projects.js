import React, { useRef } from "react";
import "./projects.css";

const Projects = () => {
  const projectContainer = useRef(null);
  document.title = "Nirjal's Portfolio | Projects";
  return (
    <div className="projectContainer">
      <div className="projects" ref={projectContainer}>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
    </div>
  );
};

export default Projects;

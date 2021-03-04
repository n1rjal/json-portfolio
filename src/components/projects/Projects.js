import React, { useContext } from "react";
import "./projects.css";
import DataContext from "../../context/datacontext";
import { GoGlobe } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Projects = () => {
  document.title = "Nirjal's Portfolio | Projects";
  const data = useContext(DataContext);
  return (
    <div className="projectContainer">
      <div className="projects">
        {data.projects.map((project, arrayIndex) => (
          <div key={arrayIndex} className="project">
            <h3 className="projectName">{project.name}</h3>
            <div className="techUsed">
              {project.techs.map((tech) => (
                <span className="techName" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>

            <br />
            <p className="projectDescription">{project.desp}</p>
            <p className="projectLinks">
              {project.liveURL ? (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  to={{ pathname: project.liveURL }}
                >
                  <GoGlobe className="web" />
                  Live URL
                </Link>
              ) : (
                <p className="noURL">
                  <GiCrossMark className="crossmark" /> No Github URL
                </p>
              )}
              <br />
              {project.githubURL && (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  to={{ pathname: project.githubURL }}
                >
                  <AiFillGithub className="github" />
                  Github URL
                </Link>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

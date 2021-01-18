import React from "react";
import "./projects.css";
import DataContext from "../../context/datacontext";
import { GoGlobe } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

const Projects = () => {
  document.title = "Nirjal's Portfolio | Projects";
  return (
    <div className="projectContainer">
      <div className="projects">
        <DataContext.Consumer>
          {(data) => {
            return data.projects.map((project) => (
              <div className="project">
                <h3 className="projectName">{project.name}</h3>

                <div className="techUsed">
                  {project.techs.map((tech) => (
                    <span className="techName">{tech}</span>
                  ))}
                </div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>

                <br />
                <p className="projectDescription">{project.desp}</p>
                <p className="projectLinks">
                  {project.githubURL ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubURL}
                    >
                      <GoGlobe className="web" />
                      Github URL
                    </a>
                  ) : (
                    <p className="noURL">
                      <GiCrossMark className="crossmark" /> No Github URL
                    </p>
                  )}
                  <br />
                  {project.liveURL ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubURL}
                    >
                      <AiFillGithub className="github" />
                      Live URL
                    </a>
                  ) : (
                    <p className="noURL">
                      <GiCrossMark /> No Github URL
                    </p>
                  )}
                </p>
              </div>
            ));
          }}
        </DataContext.Consumer>
      </div>
    </div>
  );
};

export default Projects;

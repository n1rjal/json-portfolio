import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/datacontext";
import Loader from "../loading/Loading";
import Slider from "../Slider/Slider";

const ProjectPopup = ({ show, index }) => {
  const { projects } = useContext(DataContext);

  const project = projects[index];

  return (
    <>
      {project?.name ? (
        <div className="ProjectPopupContainer">
          <div className="left">
            <Slider {...{ images: project.images, name: project.name }} />
          </div>
          <div className="right">
            <div style={{ margin: "10px 0" }}>
              <h2 className="projectName">{project.name}</h2>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
            </div>
            <div className="projectDescription">{project.desp}</div>
            <div className="projectTechs">
              {project.techs.map((tech, index) => (
                <span className="techName" key={index}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="links">
              <p>
                GITHUB:{" "}
                {project.githubURL ? (
                  <a class="link" target="_blank" href={project.liveURL}>
                    {project.githubURL}
                  </a>
                ) : (
                  " URL Not provided"
                )}
              </p>
              <p>
                Live URL:{" "}
                {project.liveURL ? (
                  <a class="link" target="_blank" href={project.liveURL}>
                    {project.liveURL}
                  </a>
                ) : (
                  " URL Not provided"
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProjectPopup;

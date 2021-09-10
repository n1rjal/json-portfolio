import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/datacontext";
import Loader from "../loading/Loading";

const ProjectPopup = ({ show, index }) => {
  const { projects } = useContext(DataContext);

  const project = projects[index];

  return (
    <>
      {project?.name ? (
        <div className="ProjectPopupContainer">
          <div className="left">
            <img
              src={`https://i.imgflip.com/1g9ab7.jpg`}
              className="projectImage"
            />
          </div>
          <div className="right">
            <h1 className="projectName">{project.name}</h1>
            <div className="projectDescription">{project.desp}</div>
            <div className="projectTechs">
              {project.techs.map((tech, index) => (
                <span className="techName" key={index}>
                  {tech}
                </span>
              ))}
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

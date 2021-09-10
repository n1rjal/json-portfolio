import React, { useContext, useState } from "react";
import { DataContext } from "../../context/datacontext";
import ProjectPopup from "./ProjectPopup";
import Popup from "../Popup/Popup";
import "./projects.css";

const Projects = () => {
  document.title = "Nirjal's Portfolio | Projects";
  const [popupData, setPopupData] = useState({
    show: false,
    index: -1,
  }); //  use for popup based data

  const { projects } = useContext(DataContext);
  return (
    <>
      {popupData.show && (
        <Popup
          show={popupData.show}
          onClose={() => {
            setPopupData({ ...popupData, show: false });
          }}
        >
          <ProjectPopup {...{ show: popupData.show, index: popupData.index }} />
        </Popup>
      )}
      <div className="projectContainer">
        <div className="projects">
          {projects.map((project, arrayIndex) => (
            <div className="project">
              <div className="projectName">{project?.name}</div>
              <div className="projectTechs">
                {project.techs.map((tech, index) => (
                  <span className="techName" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <button
                  className="showPopup"
                  onClick={(e) => {
                    setPopupData({ show: true, index: arrayIndex });
                  }}
                >
                  MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

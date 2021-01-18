import React from "react";
import "./main.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";
import DataContext from "../../context/datacontext";

const Main = () => {
  document.title = "Nirjal's Portfolio | Home";
  return (
    <DataContext.Consumer>
      {(value) => {
        return (
          <div className="main">
            <div className="irregularShape1 irregularShape"></div>
            <div className="irregularShape2 irregularShape"></div>
            <div className="gridElement1">
              <h1 className="greet">
                {value.home.greet},
                <span className="blueColored">{value.home.greetHighLight}</span>
              </h1>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
              <p className="intro">{value.home.message}</p>
              <br />
              <p className="message">
                <span className="identity">
                  {value.home.IAM.map((identity) => (
                    <span key="identity">{identity}</span>
                  ))}
                </span>
              </p>
              <br />
              <div className="socials">
                <p>
                  <a href={value.social.facebook}>
                    <FaFacebook /> Facebook
                  </a>
                </p>
                <p>
                  <a href={value.social.instagram}>
                    <FiInstagram /> Instagram
                  </a>
                </p>
                <p>
                  <a href={value.social.github}>
                    <FaGithub /> Github
                  </a>
                </p>
                <p>
                  <a href={value.social.gmail}>
                    <FiMail /> Gmail
                  </a>
                </p>
              </div>
            </div>
            <div className="gridElement2">
              <img
                src={value.home.avatar}
                alt="profile"
                className="profilePhoto"
              />
            </div>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Main;

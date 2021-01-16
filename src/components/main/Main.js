import React from "react";
import "./main.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";

const Main = () => {
  document.title = "Nirjal's Portfolio | Home";
  return (
    <>
      <div className="main">
        <div className="irregularShape1 irregularShape"></div>
        <div className="irregularShape2 irregularShape"></div>
        <div className="gridElement1">
          <h1 className="greet">
            Hi,<span className="blueColored">Mate</span>
          </h1>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <p className="intro">My name is Nrjal Paudel. I am a</p>
          <br />
          <p className="message">
            <span className="identity">
              <span>Freelancer</span>
              <span>Student</span>
              <span>Hard Worker</span>
            </span>
          </p>
          <br />
          <div className="socials">
            <p>
              <a href="https://www.facebook.com/n1rjal">
                <FaFacebook /> Facebook
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/n1_rjal">
                <FiInstagram /> Instagram
              </a>
            </p>
            <p>
              <a href="https://github.com/n1rjal">
                <FaGithub /> Github
              </a>
            </p>
            <p>
              <a href="mailto:nirjalpaudel54312@gmail.com">
                <FiMail /> Gmail
              </a>
            </p>
          </div>
        </div>
        <div className="gridElement2">
          <img
            src="https://avatars2.githubusercontent.com/u/60036262?v=4"
            alt="profile"
            className="profilePhoto"
          />
        </div>
      </div>
    </>
  );
};

export default Main;

import React, { useContext } from "react";
import "./main.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiInstagram, FiMail } from "react-icons/fi";
import { DataContext } from "../../context/datacontext";

const Main = () => {
  const data = useContext(DataContext);
  document.title = "Nirjal's Portfolio | Home";
  return (
    <div className="main">
      <div className="irregularShape1 irregularShape"></div>
      <div className="irregularShape2 irregularShape"></div>
      <div className="gridElement1">
        <h1 className="greet">
          {data.home.greet},
          <span className="blueColored">{data.home.greetHighLight}</span>
        </h1>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <p className="intro">{data.home.message}</p>
        <br />
        <p className="message">
          <span className="identity">
            {data.home.IAM.map((identity) => (
              <span key="identity">{identity}</span>
            ))}
          </span>
        </p>
        <br />
        <div className="socials">
          <p>
            <a href={data.social.facebook}>
              <FaFacebook /> Facebook
            </a>
          </p>
          <p>
            <a href={data.social.instagram}>
              <FiInstagram /> Instagram
            </a>
          </p>
          <p>
            <a href={data.social.github}>
              <FaGithub /> Github
            </a>
          </p>
          <p>
            <a href={data.social.gmail}>
              <FiMail /> Gmail
            </a>
          </p>
        </div>
      </div>
      <div className="gridElement2">
        <img src={data.home.avatar} alt="profile" className="profilePhoto" />
      </div>
    </div>
  );
};

export default Main;

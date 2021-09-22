import React from "react";
import { FiDownload } from "react-icons/fi";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <a href="/portfolio.pdf" target="_blank">
        <FiDownload className="PDF" />
        Download my portfolio
      </a>
    </div>
  );
};

export default Portfolio;

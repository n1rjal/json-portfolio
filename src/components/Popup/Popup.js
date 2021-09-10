import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const Popup = ({ children, onClose, show }) => {
  /*
        Pop up has 3 props 
        1. Component: Component that you will want to get render in the popup
        2. A on close function that will get executed when you will want to close popup
        3. Show is a boolean that sets display: absolute or none 
    */
  return ReactDOM.createPortal(
    <div
      className="popup__background"
      onClick={(e) => {
        onClose();
      }}
    >
      <div
        style={{ display: show ? "fixed" : "none" }}
        className="popup__component"
        onClick={(e) => {
          // stop bubling so that when some one clicks cimponent that popup should n't close
          e.stopPropagation();
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="popup__close"
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Popup;

import React from "react";
import { useState } from "react";
import "./Slider.css";

const Slider = ({ images, name }) => {
  const [currImage, setCurrentImage] = useState(0);
  console.log({ currImage });
  const changeImage = (direction) => {
    const totalImages = images.length;
    if (direction === "LEFT") {
      let nextImage = currImage - 1;
      if (nextImage < 0) {
        setCurrentImage(totalImages - 1);
      } else {
        setCurrentImage(currImage - 1);
      }
    }
    if (direction === "RIGHT") {
      let nextImage = currImage + 1;
      if (nextImage === totalImages) {
        setCurrentImage(0);
      } else {
        setCurrentImage(nextImage);
      }
    }
  };

  return (
    <div className="sliderContainer">
      {images.length > 0 && (
        <>
          <button
            className="direct btn-left"
            onClick={(e) => {
              changeImage("LEFT");
            }}
          >
            ◀
          </button>
          <button
            className="direct btn-right"
            onClick={(e) => {
              changeImage("LEFT");
            }}
          >
            ▶
          </button>
        </>
      )}
      <div>
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              src={`/projects/${name}/${image}`}
              className={`projectImage ${index === currImage && "show"}`}
            />
          ))
        ) : (
          <img src="/NIA.jpeg" />
        )}
      </div>
    </div>
  );
};

export default Slider;

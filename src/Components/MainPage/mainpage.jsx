import React from "react";
import myimage from "/globe.png";
import "./mainstyle.css";

export default function MainPage() {
  return (
    <>
      <div className="fontbox">
        <h3>
          Find Your Ideal Destination with Our
          <strong> Language-Based Travel System </strong>
        </h3>
      </div>
      <div className="mainglobe">
        <img src={myimage} alt="Globe" id="globeimage" />
      </div>
    </>
  );
}

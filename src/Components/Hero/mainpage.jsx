import "./mainstyle.css";
import React from "react";
import myimage from "/globe.png";

export default function MainPage() {
  return (
    <>
      <header>
        <div className="herosection">
          <div>
            <h1>
              Find Your Ideal Destination with Our Language-Based Travel System
            </h1>
            <p>
              Simply enter the languages you speak, and our system will curate a
              list of destinations where you can comfortably communicate and
              fully immerse yourself in the local culture.
            </p>
          </div>

          <img src={myimage} alt="Globe" id="globeimage" />
        </div>

        <div className="searchbox"></div>
      </header>
    </>
  );
}

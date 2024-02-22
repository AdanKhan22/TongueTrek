import React from "react";
import WorldMap from "react-svg-worldmap";
import "./map.css";
import data from "./data.json";

export default function map() {
  const width = Math.min(window.innerHeight, window.innerWidth) * 0.85;

  return (
    <div className="mymap-cointainer">
      <WorldMap
        className="mymap"
        color="green"
        size={width}
        data={data}
        richInteraction={true}
        frame={true}
        frameColor="black"
      />
    </div>
  );
}

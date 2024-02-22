import React from "react";
import "./display.css";
import Names from "../SearchBtn/input.js";

export default function display() {
  return (
    <>
      <div className="mylist">
        <div className="table">
          <div className="row">
            <div className="cell">Name</div>
            <div className="cell">Population</div>
            <div className="cell">Languages</div>
          </div>
          <div className="row">
            <div className="cell">Data</div>
            <div className="cell">Data 2</div>
            <div className="cell">Data 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

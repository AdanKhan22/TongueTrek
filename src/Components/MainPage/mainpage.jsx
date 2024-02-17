import React from "react";
import myimage from "/globe.png";

export default function mainpage() {
  const styles = {
    position: "absolute",
    inset: "154px 1px 124px -12px",
    maxWidth: "1000px",
    height: "60%",
    width: "60%",
  };

  const bottomBar = {
    position: "fixed",
    display: "inline-block",
    height: "50px",
    width: "100%",
    backgroundColor: "red",
    right: "3px",
    bottom: "0%",
  };

  return (
    <>
      <div>
        <img src={myimage} style={styles}></img>
      </div>
      <div className="mybar" style={bottomBar}>
        150
      </div>
    </>
  );
}

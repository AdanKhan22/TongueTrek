import React from "react";
import myimage from "../../../public/globe.png";

export default function mainpage() {
  const styles = {
    display: "flex",
    width: "50%",
    maxWidth: "1000px",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  };
  return (
    <div>
      <img src={myimage} style={styles}></img>
    </div>
  );
}

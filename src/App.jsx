import React from "react";
import WorldMap from "react-svg-worldmap";
import MyNav from "./Components/Navbar/Navbar.jsx";
import MySearch from "./Components/SearchBtn/searchbtn.jsx";
import "./styles.css";

export default function App() {
  const data = [
    { country: "in", value: "🇮🇳" }, // India
    { country: "us", value: "🇺🇸" }, // United States
    { country: "gb", value: "🇬🇧" }, // United Kingdom
    { country: "fr", value: "🇫🇷" }, // France
    { country: "de", value: "🇩🇪" }, // Germany
    // Add more countries as needed
  ];

  /* const myStyles = {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "5px",
  };
*/

  //A way to write incline css
  document.body.style.backgroundColor = "black";

  return (
    <>
      <MyNav title="My Nav" mode={"dark"}></MyNav>
      <MySearch></MySearch>
      {/* <div style={myStyles}></div> */}
      <WorldMap color="green" size="lg" data={data} />
    </>
  );
}

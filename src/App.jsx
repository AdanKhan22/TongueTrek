import React from "react";
import MyMap from "./Components/Map/map.jsx";
import MyNav from "./Components/Navbar/Navbar.jsx";
import MySearch from "./Components/SearchBtn/searchbar.jsx";
import MyMain from "./Components/MainPage/mainpage.jsx";
import MyList from "./Components/DisplayContents/display.jsx";

export default function App() {
  return (
    <>
      <MyNav title="My Nav"></MyNav>
      <MyMain></MyMain>
      <MySearch></MySearch>
      <MyList></MyList>
      <MyMap></MyMap>
    </>
  );
}

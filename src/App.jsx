import React from "react";
// import MyMap from "./Components/Map/map.jsx"; // Map will be implemented later
import MyNav from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/mainpage.jsx";
import Searchbar from "./Components/SearchBar/searchbar.jsx";

export default function App() {
  return (
    <>
      <MyNav title="My Nav"></MyNav>
      <Hero></Hero>
      <Searchbar></Searchbar>
    </>
  );
}

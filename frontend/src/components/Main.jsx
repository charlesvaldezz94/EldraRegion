import React from "react";
import Footer from "./Footer";

const Main = () => {
  return <div id="main">
    <div className="mainContainer">
      <div className="mainTitle"> Welcome to the Eldra Region </div>
      <div className="imageContainer"> Map image here </div>
      <div className="startersContainer"> Check out the starters here </div>
      <div className="fullDexContainer"> Check out the full pokedex here! </div>
    </div>
    <Footer />
    </div>;
};

export default Main;

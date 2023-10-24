import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="main">
      <div className="mainContainer">
        <div className="mainTitle"> Welcome to the Eldra Region </div>
        <div className="imageContainer"> Map image here </div>
        <div className="startersContainer">
          <div className="startersTitle">Check out the starters here</div>
          <NavLink to="Starters">
            <div className="startersButton">
              <button className="btnDanger"> Starters </button>
            </div>
          </NavLink>
        </div>
        <div className="fullDexContainer">
          <div className="pokedexTitle">Check out the full pokedex here!</div>
          <div className="pokedexButton">
            <NavLink to="pokedex">
              <button className="btnDanger"> Pokedex </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

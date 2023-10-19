import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, PokedexPage, Starters} from "./";
import { getAllPokemon } from "../apiAdapter";

const Main = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    async function fetchAllPokemon() {
      const fullDex = await getAllPokemon();
      setAllPokemon(fullDex);
    }
    fetchAllPokemon();

    },
  [])

  return (
    <BrowserRouter>
    <div className="MainContainer">
      </div>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/pokedex" element={<PokedexPage allPokemon={allPokemon} setAllPokemon={setAllPokemon}/>} />
      <Route path="/starters" element={<Starters/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default Main;

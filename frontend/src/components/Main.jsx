import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, PokedexPage, Starters, CreateNewPokemon } from "./";
import { getAllPokemon } from "../apiAdapter";

const Main = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchAllPokemon() {
      const fullDex = await getAllPokemon();
      setAllPokemon(fullDex);
    }
    fetchAllPokemon();
  }, []);

  return (
    <BrowserRouter>
      <div className="MainContainer"></div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              allPokemon={allPokemon}
              setAllPokemon={setAllPokemon}
            />
          }
        />
        <Route path="/starters" element={<Starters />} />
        <Route path="/createNewPokemon" element={<CreateNewPokemon />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Main;

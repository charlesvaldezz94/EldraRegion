import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { deleteSinglePokemon } from "../../apiAdapter";
import { useParams } from "react-router-dom";

const PokedexPage = (props) => {
  const allPokemon = props.allPokemon;
  const setAllPokemon = props.setAllPokemon;
  const { pokemonID } = useParams();

  async function handleSubmitDeleteSinglePokemon(pokemonID) {
    const deletedPokemon = await deleteSinglePokemon(pokemonID);
    alert("This pokemon has been deleted");
    location.reload();
  }

  return (
    <div className="pokedexPageContainer">
      <div className="pokedexMap">
        {allPokemon.map((pokemon) => (
          <div className="singlePokemon">
            <div className="pokemonName">{pokemon.name} </div>
            <div className="pokemonType1">{pokemon.type1} </div>
            <div className="pokemonType2">{pokemon.type2} </div>
            <div className="pokemonDexEntry">{pokemon.pokedex_entry} </div>
            <div className="pokemonAvgW">{pokemon.average_weight} kg </div>
            <div className="PokemonAvgH">
              {pokemon.average_height} centimeters
            </div>
            <button onClick={() => handleSubmitDeleteSinglePokemon(pokemon.id)}>
              Delete Pokemon
            </button>
            <br></br>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PokedexPage;

import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { createPokemon } from "../../apiAdapter";

const CreateNewPokemon = () => {
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeName, setPokeName] = useState("");
  const [pokeType1, setPokeType1] = useState("");
  const [pokeType2, setPokeType2] = useState("");
  const [pokedexEntry, setPokedexEntry] = useState("");
  const [pokeWeight, setPokeWeight] = useState(0);
  const [pokeHeight, setPokeHeight] = useState(0);

  //Handle Submit Function for all API calls
  async function handleSubmitNewPokemon() {
    const newPokemon = await createPokemon(
      pokeNumber,
      pokeName,
      pokeType1,
      pokeType2,
      pokedexEntry,
      pokeWeight,
      pokeHeight
    );
    alert("You have created a new Pokemon");
    return newPokemon;
    
  };

  //Pokedex Entry Number
  async function handleChangeNumber(e) {
    setPokeNumber(e.target.value);
    console.log(pokeNumber);
  };

  //Pokedex Entry Name
  async function handleChangeName(e) {
    setPokeName(e.target.value);
    console.log(pokeName);
  };

  //Pokedex Entry Type 1
  async function handleChangeType1(e) {
    setPokeType1(e.target.value);
    console.log(pokeType1);
  };

  //Pokedex Entry Type 2
  async function handleChangeType2(e) {
    setPokeType2(e.target.value);
    console.log(pokeType2);
  };

  //Pokedex Entry Description
  async function handleChangeDexEntry(e) {
    setPokedexEntry(e.target.value);
    console.log(pokedexEntry);
  };

  //Pokdex AVG Weight
  async function handleChangeWeight(e) {
    setPokeWeight(e.target.value);
    console.log(pokeWeight);
  };

  //Pokedex AVG Height
  async function handleChangeHeight(e) {
    setPokeHeight(e.target.value);
    console.log(pokeHeight);
  };

  return (
    <div className="CreateNewPokemonContainer">
      <div className="CreateNewPokemonTitle"> Create a Pokemon Here! </div>
      <div className="FormContainer">
        <form>
          <div className="formTitle"> New Pokemon Information </div>
          <div className="pokemonNumberForm">
            <span>
              <label> Number: </label>
              <input
                id="pokemonNumber"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeNumber}
              ></input>
            </span>
          </div>
          <div className="pokemonNameForm">
            <span>
              <label> Name: </label>
              <input
                id="pokemonName"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeName}
              ></input>
            </span>
          </div>
          <div className="pokemonTypeForm">
            <span>
              <label> Type1: </label>
              <input
                id="pokemonType1"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeType1}
              ></input>
            </span>
          </div>
          <div className="pokemonTypeForm">
            <span>
              <label> Type2: </label>
              <input
                id="pokemonType2"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeType2}
              ></input>
            </span>
          </div>
          <div className="pokemonDexEntryForm">
            <span>
              <label> Pokedex Entry: </label>
              <input
                id="pokemonDexEntry"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeDexEntry}
              ></input>
            </span>
          </div>
          <div className="pokemonWeightForm">
            <span>
              <label> Average Weight: </label>
              <input
                id="pokemonWeight"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeWeight}
              ></input>
            </span>
          </div>
          <div className="pokemonHeightForm">
            <span>
              <label> Average Height: </label>
              <input
                id="pokemonHeight"
                className="pokemonInfo"
                type="text"
                onChange={handleChangeHeight}
              ></input>
            </span>
          </div>
          <div className="submitBtn">
            <button onClick={handleSubmitNewPokemon}> Submit </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateNewPokemon;

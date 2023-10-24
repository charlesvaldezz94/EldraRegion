import React, { useState, useEffect } from "react";
const BASE_URL = "http://localhost:8080";

export async function getAllPokemon() {
  try {
    const response = await fetch(`${BASE_URL}/dex`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return alert("Error loading the Pokedex");
  }
}

export async function deleteSinglePokemon(id) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    };
    const response = await fetch(`${BASE_URL}/dex`, options);
    const result = await response.json();
    console.log(options);
    return result;
  } catch (error) {}
}

export async function createPokemon(
  number,
  name,
  type1,
  type2,
  pokedex_entry,
  average_weight,
  average_height
) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        number,
        name,
        type1,
        type2,
        pokedex_entry,
        average_weight,
        average_height,
      }),
    };
    const response = await fetch(`${BASE_URL}/dex`, options);
    const result = await response.json();
    console.log(options);
    return result;
  } catch (error) {
    console.log("error");
  }
}

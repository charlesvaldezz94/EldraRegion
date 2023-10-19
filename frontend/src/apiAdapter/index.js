import React, { useState, useEffect } from 'react';
const BASE_URL = "http://localhost:8080";

export async function getAllPokemon() {
    try {
      const response = await fetch(`${BASE_URL}/dex`);
      const result = await response.json();
      return result;
    } 
    catch (error) {
      console.error(error);
      return alert("Error loading the Pokedex");
    }
  };
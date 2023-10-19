import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { getAllPokemon } from '../../apiAdapter';
import { NavLink } from 'react-router-dom';

const PokedexPage = (props) => {
    const allPokemon = props.allPokemon;
    const setAllPokemon = props.setAllPokemon;


    return (
    <div className='pokedexPageContainer'>
        <div className='pokedexMap'>
            {allPokemon.map((pokemon) => (<div className='singlePokemon'> {pokemon.name} </div>))}
        </div>
        <Footer/>
    </div>
    )
};

export default PokedexPage;
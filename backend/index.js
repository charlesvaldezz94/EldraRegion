import express from 'express';

import {
    getPokedex,
    getPokemon,
    createPokemon
} from './database.js';

const app = express();

app.use(express.json());

//async call to request pokedex information
app.get("/pokedex", async (req, res) => {
    const pokedex = await getPokedex();
    res.send(pokedex);
});

//async call to request single pokemon
app.get("/pokedex/:id", async (req, res) => {
    const id = req.params.id;
    const pokemon = await getPokemon(id);
    res.send(pokemon);
});

//async POST request to add more pokemon
app.post("/pokedex", async (req, res) => {
    const { number, name, type1, type2, pokedex_entry, average_weight, average_height } = req.body;
    const createdPokemon = await createPokemon(number, name, type1, type2, pokedex_entry, average_weight, average_height);
    res.status(201).send(createdPokemon);
});

//Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error handler')
});

//server port
app.listen(8080, () => {
    console.log('server is running on port 8080')
});
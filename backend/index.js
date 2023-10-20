import express from 'express';
import cors from 'cors';

import {
    getPokedex,
    getPokemon,
    createPokemon,
    deletePokemon
} from './database.js';

const app = express();

app.use(cors());

app.use(express.json());

//async call to request pokedex information
app.get("/dex", async (req, res) => {
    const pokedex = await getPokedex();
    res.send(pokedex);
});

//async call to request single pokemon
app.get("/dex:id", async (req, res) => {
    const id = req.params.id;
    const pokemon = await getPokemon(id);
    res.send(pokemon);
});

//async POST request to add more pokemon
app.post("/dex", async (req, res) => {
    const { number, name, type1, type2, pokedex_entry, average_weight, average_height } = req.body;
    const createdPokemon = await createPokemon(number, name, type1, type2, pokedex_entry, average_weight, average_height);
    res.status(201).send(createdPokemon);
});

app.delete("/dex", async (req, res) => {
    const {id} = req.body;
    const deletedPokemon = await deletePokemon(id);
    res.status(201).send(`Pokemon with id:${id} has been deleted!`, deletedPokemon);
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
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

//connect to database pool
const pool = mysql.createPool ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();
//create env file (.env) and then npm i dotenv , then import and add the configuration function.

//print out the rows from TABLE pokedex
export async function getPokedex() {
    const [rows] = await pool.query('select * from pokedex');
    return rows
};

//select single pokemon
export async function getPokemon(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM pokedex 
    WHERE id = ?
    `, [id])
    return rows [0]
};

//creating new pokemon
export async function createPokemon(number, name, type1, type2, pokedex_entry, average_weight, average_height) {
    const [result] = await pool.query(`
    INSERT INTO pokedex (number, name, type1, type2, pokedex_entry, average_weight, average_height)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [number, name, type1, type2, pokedex_entry, average_weight, average_height])
};

//deleting a created pokemon
export async function deletePokemon(id) {
    const [result] = await pool.query(`
    DELETE FROM pokedex WHERE id=?`, [id]);
    console.log(`Pokemon with id:${id} has been deleted`)
};

//create all async functions and export




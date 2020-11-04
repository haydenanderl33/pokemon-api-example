const express = require('express');
const app = express();
const pokeController = require('./pokemonController');

app.use(express.json());

app.get('/api/cards', pokeController.getCards);

app.listen(5050, () => console.log(`Listening to Port 5050`));
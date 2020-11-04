const axios = require('axios');

module.exports = {
  getCards: (req, res) => {
    const { pokemonName } = req.query;
    axios
      .get(`https://api.pokemontcg.io/v1/cards?name=${pokemonName}`)
      .then(response => {
        // console.log(response.data.cards);
        res.status(200).send(response.data.cards);
      })
      .catch(err => console.log(err))
  }
};
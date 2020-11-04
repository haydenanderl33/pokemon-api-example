import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      cards: []
    };
  }

  handleChange = (e) => {
    // console.dir(e.target.value);
    this.setState({ inputText: e.target.value })
  }

  handleClick = () => {
    const { inputText } = this.state;
    axios
      .get(`/api/cards?pokemonName=${inputText}`)
      .then(response => this.setState({ cards: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const map = this.state.cards.map(card => (
      <img src={card.imageUrl} />
    ));

    return (
      <div>
        <h1>Pokemon API!</h1>
        <input
          placeholder="Find Pokemon Cards"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Find Card</button>
        {map}
      </div>
    )
  }
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import PlayerHand from './components/PlayerHand';
import { deck as newDeck } from './data/deck';

function App() {

  console.log('new deck', newDeck);

  const [deck, setDeck] = useState(newDeck);
  const [playerHand, setPlayerHand] = useState([]);

  const drawCard = () => {

  };


  return (
    <div className="App">
      <PlayerHand hand={playerHand} />
    </div>
  );
}

export default App;

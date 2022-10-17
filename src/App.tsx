import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import PlayerHand from './components/PlayerHand';
import { ICard } from './data/interfaces';
import { deck as newDeck } from './data/deck';

function App() {

  
  const [deck, setDeck] = useState<Array<ICard>>(newDeck);
  const [playerHand, setPlayerHand] = useState<Array<ICard>>([]);
  
  console.log('new deck', deck);
  
  const drawCard = ():void => {
    console.log('firing draw card')
    const [ firstCard, ...restOfDeck ] = deck;
    setDeck(restOfDeck);
    setPlayerHand( playerHand => [...playerHand, firstCard] );
  };

  return (
    <div className="App">
      <PlayerHand hand={playerHand} drawCard={drawCard} />
    </div>
  );
}

export default App;

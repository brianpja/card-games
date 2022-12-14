import React from 'react';
import Card from './Card';
import { ICard } from '../data/interfaces';



interface Props {
  drawCard: React.MouseEventHandler<HTMLButtonElement>,
  hand: Array<ICard>,
};

const PlayerHand = ({ drawCard, hand }: Props) => {
  console.log('hand', hand);

  // need to map cards based on hand array
  return (
    <div className="player-hand">
      <button onClick={drawCard}>Draw Card</button>
      {
        hand.map( (card:ICard) => {
          return (
            <Card suit={card.suit} value={card.value} />
          )
        })
      }
    </div>
  )
};

export default PlayerHand;
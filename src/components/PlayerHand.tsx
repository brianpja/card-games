import React from 'react';
import Card from './Card';
import { ICard } from '../data/interfaces';



interface Props {
  hand: Array<ICard>
};

const PlayerHand = ({ hand }: Props) => {
  console.log('hand', hand);
  return (
    <div className="player-hand">
      <Card />
      <Card />
    </div>
  )
};

export default PlayerHand;
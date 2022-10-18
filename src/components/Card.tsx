import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { IconLookup, IconDefinition,
  findIconDefinition, 
  IconName} from '@fortawesome/fontawesome-svg-core';

interface Props {
  suit: string,
  value: number
}

const Card = ({ suit, value }: Props) => {

  const getFaceValue = (value: number): string => {
    if (value < 11) return value.toString();
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    if (value === 14) return 'A';
    return '';
  }

  const getIconName = (suit: string) => {
    // switch (suit) {
    //   case 'clubs': return solid('club') as IconProp;
    //   case 'diamonds': return solid('diamond') as IconProp;
    //   case 'spades': return solid('spade') as IconProp;
    //   case 'hearts': return solid('heart') as IconProp;
    // }
    // return solid('club') as IconProp;

    const name: IconName = suit.slice(0, -1) as IconName;

    const lookup: IconLookup = { prefix: 'fas', iconName: name };
    console.log('lookup', lookup);
    const definition: IconDefinition = findIconDefinition(lookup);
    console.log('definition: ', definition);
    return definition;
  }

  return (
    <div className="card">
      <span>{getFaceValue(value)} <FontAwesomeIcon icon={"getIconName(suit)"} /></span>
    </div>
  )
};

export default Card;
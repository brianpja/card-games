import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Card = ({}) => {
  return (
    <div className="card">
      <span>K <FontAwesomeIcon icon={solid('heart')} /></span>
    </div>
  )
};

export default Card;
import React from 'react';
import './Square.css';

const Square = (props) => {
  let className = 'square'

  if (props.isVictoryStep) {
    className += ' victory-step'
  }

  return (
    <button className={className} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
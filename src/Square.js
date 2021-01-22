import React from 'react';

/**
 * Renders a square on the tic tac toe board
 * @param {*} props
 */
function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

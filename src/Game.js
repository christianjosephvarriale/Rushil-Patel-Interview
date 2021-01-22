import React from 'react';
import Board from './Board';
/**
 * Calculates whether a win has occured based on Game State
 * @param {*} squares
 */
function calculateWinner(squares) {
  if (squares[0] === squares[3] && squares[3] === squares[6])
    return `winner is ${squares[0]}`;
  else if (squares[0] === squares[4] && squares[4] === squares[8])
    return `winner is ${squares[0]}`;
  else if (squares[0] === squares[4] && squares[4] === squares[8])
    return `winner is ${squares[0]}`;
  else if (squares[0] === squares[4] && squares[4] === squares[8])
    return `winner is ${squares[0]}`;
  else if (squares[1] === squares[5] && squares[5] === squares[7])
    return `winner is ${squares[0]}`;
  return;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateArray: Array(9).fill(0),
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  /**
   * This function allows you to jump to any previous move
   * @param {*} squares
   */
  jumpTo(step) {
    return;
  }

  /**
   * What happens when a square is clicked on?
   * @param {*} i
   */
  handleClick = i => {
    const newStateArray = [...this.state.history[0].squares];
    if (this.state.xIsNext) {
      newStateArray[i] = 'X';
    } else {
      newStateArray[i] = 'O';
    }
    const newHistory = [
      {
        squares: [...newStateArray],
      },
    ];
    this.setState({ history: newHistory });
    this.setState({ xIsNext: !this.state.xIsNext });
    // return;
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

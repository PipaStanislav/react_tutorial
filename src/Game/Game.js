import React from 'react';
import './Game.css';
import Board from './Board/Board';
import GameInfo from './Game-info/Game-info';
import calculateWinner from './libs/calculate-winner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    let victoriousSteps;

    if (winner) {
      status = 'Winner: ' + winner.name;
      victoriousSteps = winner.steps;
    } else if (!winner && !current.squares.includes(null)) {
      status = 'Draw in the game';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            victoriousSteps={victoriousSteps}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <GameInfo
            status={status}
            history={this.state.history}
            onClick={(move) => this.jumpTo(move)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
import React from 'react';
import './Board.css';
import Square from './Square/Square';
import arraySplitter from '../../libs/array-splitter';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.NumberSquaresInRow = 3;
  }

  renderSquare(i) {
    let isVictoryStep = false;

    if (this.props.victoriousSteps && this.props.victoriousSteps.includes(i)) {
      isVictoryStep = true;
    }

    return <Square
      isVictoryStep={isVictoryStep}
      key={i.toString()}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  renderBoardRow(row, i) {
    return (
      <div key={i.toString()} className="board-row">
        {row.map(square => this.renderSquare(square))}
      </div>
    )
  }

  renderBoardRows(squares) {
    return arraySplitter(squares, this.NumberSquaresInRow).map((row, index) => {
      return this.renderBoardRow(row, index);
    });
  }

  render() {
    return (
      <div>
        {this.renderBoardRows(this.props.squares)}
      </div>
    );
  }
}

export default Board;
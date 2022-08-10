import React from 'react';
import './History.css';

class History extends React.Component {
  render() {
    const moves = this.props.history.map((step, move) => {
      const desc = move ? 'Перейти к ходу #' + move : 'К началу игры';

      return (
        <li key={move}>
          <button onClick={() => this.props.onClick(move)}>{desc}</button>
        </li>
      )
    });

    return (
      <div className="history">
        {this.props.sort ? moves : moves.reverse()}
      </div>
    )
  }
}

export default History;
import React from 'react';
import './Game-info.css';
import History from '../History/History';
import Sort from './Sort/Sort';

class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: true,
    }
  }

  sort() {
    return this.setState({
      sort: !this.state.sort,
    })
  }

  render() {
    return (
      <div>
        <h4>{this.props.status}</h4>
        <Sort onClick={() => this.sort()}/>
        <History
          history={this.props.history}
          onClick={(move) => this.props.onClick(move)}
          sort={this.state.sort}
        />
      </div>
  )
  }
}

export default GameInfo;
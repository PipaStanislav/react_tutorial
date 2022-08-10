import React from 'react';
import './Sort.css';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sort extends React.Component {
  render() {
    return (
      <div className='sort'>
        <button onClick={() => this.props.onClick()}>
          <FontAwesomeIcon icon={faSort}/>
        </button>
      </div>
    );
  }
}

export default Sort;
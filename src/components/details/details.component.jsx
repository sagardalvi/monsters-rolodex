import React from 'react';
import './details.styles.scss';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.monsterId = props.match.params.monsterId
  }

  render() {
    return (
      <div>
        <h1>Monster : {this.monsterId}</h1>
      </div>
    )
  }
}

export default Details;
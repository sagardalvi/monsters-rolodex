import React from 'react';
import './card.style.css';
import {withRouter} from 'react-router-dom';

const Card = ({monster, history}) => {
  return (
    <div className='card-container' onClick={() => history.push(`/monster/${monster.id}`)}>
      <img alt='monster'
           src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

export default withRouter(Card);
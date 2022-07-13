import React, {Component} from 'react';
import './card.styles.css'

class Card extends Component {

  render() {
    const {id, name, email} = this.props.monster
    return (
      <div className={'card-container'}>
        <img alt={`${name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;
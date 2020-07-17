import React from 'react';

const Card = props => {

    const { card } = props

    return (
        <div className='character-card'>
            <img src={card.image} />
            <h3>{card.name}</h3>
            <h4>{card.gender}</h4>
            <h3>Status: <span id='alive'>{card.status}</span></h3>
            <h3>Status: <span id='dead'>{card.status}</span></h3>
            <h3>Status: <span id='else'>{card.status}</span></h3>
        </div>
    )

    // if(card.status === 'Alive'){
    //     return  <h3>Status: <span id='alive'>{card.status}</span></h3>
    // }else if(card.status === 'Dead'){
    //     return <h3>Status: <span id='dead'>{card.status}</span></h3>
    // }else{
    //     return <h3>Status: <span id='else'>{card.status}</span></h3>
    // }
}

export default Card;
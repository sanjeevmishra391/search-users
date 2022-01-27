import React from 'react';
import './card-style.css'

function Card({user}) {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${user.id}set=set2&?size=180x180`} />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default Card;
import React from 'react';
import './cardlist-style.css';

import Card from '../card/Card'

function CardList({users}) {
    return (
        <div className='card-list'>
            {users.map((user) => 
              <Card key={user.id} user={user} />
            )} 
        </div>
    )
}

export default CardList;


// props -- properties

// class CardList extends React.Component {
//     render() {
//         return (
//             <h1>Hey, {this.props.name}</h1>
//         )
//     }
// }

// users = [Jack, John]
// , George, Stuart, Thomas]
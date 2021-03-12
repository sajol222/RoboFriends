import React from 'react';
import Cards from './Cards'

const CardList = ({robots}) => {
    const cardItems = robots.map((user , i) => {
        return <Cards id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
    
        <div>
            {cardItems}
        </div>
        
        /* <Cards id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
        <Cards id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
        <Cards id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
        <Cards id={robots[6].id} name={robots[6].name} email={robots[6].email}/> */
    
    )
    }
export default CardList;    
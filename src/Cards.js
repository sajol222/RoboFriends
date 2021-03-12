import React from 'react';
import ReactDOM from 'react-dom';


const Cards = (props) => {
    return (
        
        <div className='tc bg-light-green dib br3 ma1 grow shadow-5 '>
            <img className='w-50' alt='robot' src={'https://robohash.org/sajolbd?100x100'}/>
            <div>
                 
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>

        </div>
        
    )
}

export default Cards;
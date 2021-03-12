import React from 'react'


const SearchBox = ({searchChange}) => {
    return(
        <div className='ma2'>
        <input 
            className='pa2 ba br3 b--green bg-lightest-blue' 
            type='search' 
            placeholder='Search Here'
            onChange={searchChange}
            >
            
        </input>
        </div>
    )
}
export default SearchBox;
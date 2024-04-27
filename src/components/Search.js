import React from 'react'

const Search = ({fetchData,setSearch}) => {
    
    return (
        <div className='search-container'>
            <div className='search-box'>
                <input type='text' placeholder='Search places...' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={fetchData}>Ctrl + /</button>
            </div>
        </div>
    )
}

export default Search
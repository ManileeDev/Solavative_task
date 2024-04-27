import React from 'react'

const Search = () => {
  return (
    <div className='search-container'>
        <div className='search-box'>
        <input type='text' placeholder='Search places...'/>
        <button>Ctrl + /</button>
        </div>
    </div>
  )
}

export default Search
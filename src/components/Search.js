import React, { useEffect, useRef } from 'react'

const Search = ({ fetchData, setSearch,loading }) => {

    const searchInputRef = useRef(null);
    const searchButtonRef = useRef(null);

    useEffect(() => {
        const handleGlobalKeyPress = (event) => {
            if (event.ctrlKey && event.key === '/') {
                event.preventDefault();
                searchInputRef.current.focus();
            }
        };

        const handleSearchKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                searchButtonRef.current.click();
            }
        };

        document.addEventListener('keydown', handleGlobalKeyPress);
        searchInputRef.current.addEventListener('keydown', handleSearchKeyPress);

        return () => {
            document.removeEventListener('keydown', handleGlobalKeyPress);
            searchInputRef.current.removeEventListener('keydown', handleSearchKeyPress);
        };
    }, []);

    return (
        <div className='search-container'>
            <div className='search-box'>
                <input type='text' ref={searchInputRef} placeholder='Search places...' onChange={(e) => setSearch(e.target.value)} />
                <button ref={searchButtonRef} onClick={fetchData}>Ctrl + /</button>      
            </div>
            {loading && <div className="spinner"></div>}
        </div>
    )
}

export default Search
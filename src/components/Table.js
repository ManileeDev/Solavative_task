import React from 'react'

const Table = ({currentCities,setRow,setPage,setLimit,indexOfFirstCity,row,cities}) => {
    return (
        <>

        
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
            {currentCities.length === 0 && <div className='show-error'>No result found</div>}

                {
                    currentCities.map((city, index) => {
                        return (
                            <tr>
                                <td>{index + indexOfFirstCity + 1}</td>
                                <td>{city.name}</td>
                                <td>{city.country}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
        <div className="pagination">
        {Array.from({ length: Math.ceil(cities.length / row) }, (_, i) => (
            <div key={i}>
                <button className='page-button' onClick={() => setPage(i + 1)}>{i + 1}</button>
            </div>
        ))}
    </div>
    
    </>
    )
}

export default Table
import {useRef, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import axios from 'axios';

function App() {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(5);
    const [row, setRow] = useState(3);
    const [page, setPage] = useState(1);

    const rowVal = useRef();
    const limitVal = useRef();

    const indexOfLastCity = row * page;
    const indexOfFirstCity = indexOfLastCity - row;
    const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

    const fetchData = () => {
        var options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: { countryIds: 'IN', namePrefix: search, limit: limit },
            headers: {
                'x-rapidapi-host': process.env.REACT_APP_HOST,
                'x-rapidapi-key': process.env.REACT_APP_SECRET
            }
        };

        axios.request(options).then(function (response) {
            setCities(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
  return (
    <div className="App">
      <div className='input-fields'>
      <Search  setSearch={setSearch} fetchData={fetchData}/>
      <div className='search-container'>
        <div className='search-box'>
                <input type='text' placeholder='Row Count' ref={rowVal} />
                <button onClick={() => setRow(rowVal.current.value)}>SetRow</button>
            </div>
        </div>
        <div className='search-container'><div className='search-box'>
                <input type='text' placeholder='Set Limit'  ref={limitVal}/>
                <button onClick={()=> setLimit(limitVal.current.value)}>Limit</button>
            </div></div>
      </div>
      
      <Table setPage={setPage} setLimit={setLimit} cities={cities} row={row} setRow={setRow} indexOfFirstCity={indexOfFirstCity} currentCities={currentCities} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import './FlightSearch.css';

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          'https://flight-radar1.p.rapidapi.com/flights/list-most-tracked',
          {
            headers: {
              'X-RapidAPI-Key': '82b2fd459bmsh611bbd4f760973fp1a3dbdjsnd4e23679eaca',
              'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
            },
          }
        );
        setFlights(response.data.data);
        setFilteredFlights(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching airport data: ', error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const fuseOptions = {
    keys: ['model'],
    threshold: 0.3,
  };

  const fuse = new Fuse(flights, fuseOptions);

  const handleSearch = () => {
    const searchText = searchQuery.toLowerCase();

    if (searchText.trim() === '') {
      setFilteredFlights(flights);
    } else {
      const searchResults = fuse.search(searchText);
      const matchingFlights = searchResults.map((result) => result.item);

      setFilteredFlights(matchingFlights);
    }
  };

  const flightCards = filteredFlights.map((flight, index) => (
    <div className="flight-card" key={index}>
      <h3>Flight {flight.model}</h3>
      <p>Departure Airport: {flight.from_city}</p>
      <p>Arrival Airport: {flight.to_city}</p>
      <p>Airline: {flight.type}</p>
    </div>
  ));

  return (
    <div className="flight-search">
      <h1 className="center-text">Flight Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by flight name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <button disabled>Loading...</button>
      ) : (
        <div className="flight-info">
          <h2>Flights</h2>
          <div className="card-container2">{flightCards}</div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;

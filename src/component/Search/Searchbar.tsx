import React, { useState } from 'react';
import './searchbar.scss'; // Make sure you have the correct path for your CSS file
import data from './data.json';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<typeof data.data>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = data.data.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Rehabilitation Centers</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {searchResults.map((result, index) => (
          <div key={index} className="result-card">
            <h2>{result.Name}</h2>
            <p>{result.Address}</p>
            <p>{result['Phone Number']}</p>
            <a href={result.Website} target="_blank" rel="noreferrer">
              Visit Website
            </a>
            <p>{result.City}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchbar;

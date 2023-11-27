import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/country?name=${searchQuery}`);
      const countryData = response.data;
      setCountryInfo(countryData);
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      {/* ... (existing JSX) */}
    </div>
  );
};

export default Search;

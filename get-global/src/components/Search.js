import React, { useState } from 'react';
import { fetchCountryInfo } from '../services/api';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetchCountryInfo(searchQuery);
      setCountryInfo(response);
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Enter country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {countryInfo && !loading ? (
        <div className="country-container">
          <h2>{searchQuery}</h2>
          <p>
            <span>Capital:</span> {countryInfo.capital}
          </p>
          <p>
            <span>Population:</span> {countryInfo.population}
          </p>
          <p>
            <span>Currency:</span>{' '}
            {Object.keys(countryInfo.currencies || {}).map((currencyCode) => {
              const currency = countryInfo.currencies[currencyCode];
              return (
                <span key={currencyCode}>
                  {currencyCode} ({currency?.name || 'Unknown Name'}){' '}
                  {currency?.symbol && `(${currency.symbol})`}
                </span>
              );
            }) || 'N/A'}
          </p>
          <p>
            <span>Languages:</span> {countryInfo.languages}
          </p>
          {countryInfo.flag && (
            <div>
              <span>Flag:</span>
              <img src={countryInfo.flag} alt="Flag" width="50" height="30" />
            </div>
          )}
          <p>
            <span>Continent:</span> {countryInfo.continents}
          </p>
        </div>
      ) : null}
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default Search;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [countryInfo, setCountryInfo] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://3000-samobrienolin-getglobal-7hg144uhsd1.ws-eu106.gitpod.io/country?name=${searchQuery}`);
//       const countryData = response.data;
//       setCountryInfo(countryData);
//     } catch (error) {
//       console.error('Error fetching country data:', error);
//       setCountryInfo(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-container">
//       <div className="input-button-container">
//         <input
//           type="text"
//           placeholder="Enter country name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {countryInfo && !loading ? (
//         <div className="country-container">
//           <p>
//             <span>Capital:</span> {countryInfo.capital}
//           </p>
//           <p>
//             <span>Population:</span> {countryInfo.population}
//           </p>
//           <p>
//             <span>Currency:</span>{' '}
//             {Object.keys(countryInfo.currencies || {}).map((currencyCode) => {
//               const currency = countryInfo.currencies[currencyCode];
//               return (
//                 <span key={currencyCode}>
//                   {currencyCode} ({currency?.name || 'Unknown Name'}){' '}
//                   {currency?.symbol && `(${currency.symbol})`}
//                 </span>
//               );
//             }) || 'N/A'}
//           </p>
//           <p>
//             <span>Languages:</span> {countryInfo.languages}
//           </p>
//           {countryInfo.flag && (
//             <div>
//               <span>Flag:</span>
//               <img src={countryInfo.flag} alt="Flag" width="50" height="30" />
//             </div>
//           )}
//           <p>
//             <span>Continent:</span> {countryInfo.continents}
//           </p>
//         </div>
//       ) : null}
//       {loading && <p className="loading">Loading...</p>}
//     </div>
//   );
// };

// export default Search;

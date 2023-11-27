const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/country', async (req, res) => {
  try {
    const { name } = req.query;
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const countryData = response.data[0];
    res.json({
      capital: Array.isArray(countryData.capital)
        ? countryData.capital.join(', ')
        : countryData.capital || 'N/A',
      population: countryData.population || 'N/A',
      currencies: countryData.currencies || {},
      continents: countryData.continents?.[0] || 'N/A',
      languages: typeof countryData.languages === 'object'
        ? Object.values(countryData.languages).join(', ')
        : countryData.languages?.[0] || 'N/A',
      flag: countryData?.flags?.svg || '',
    });
  } catch (error) {
    console.error('Error fetching country data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

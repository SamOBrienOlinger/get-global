const API_BASE_URL = 'http://localhost:3001';

const fetchCountryInfo = async (countryName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/country?name=${countryName}`);
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
};

export { fetchCountryInfo };

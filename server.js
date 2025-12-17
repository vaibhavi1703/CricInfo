// Start the Express server
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Change to your desired port
const cors = require('cors');

// Define your API keys for different endpoints
const currentMatchesApiKey = 'b7993fbb-99d3-4754-8f52-26abc31a9be7';

// Create a route to fetch current matches
app.get('/fetchCurrentMatches', async (req, res) => {
  try {
    const apiUrl = 'https://api.cricapi.com/v1/currentMatches'; // Replace with the actual URL
    const response = await axios.get(`${apiUrl}?apikey=${currentMatchesApiKey}&offset=0`);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const axios = require('axios');
const { generateRoast } = require('../utils/roastGenerator');

const getRoast = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required.' });
  }

  try {
    const token = process.env.APP_ACCESS_TOKEN;

    // Mock Instagram API call (replace with real API call)
    const userData = {
      username,
      followers_count: 100,
      media_count: 10,
    };

    // Generate a roast based on the mock user data
    const roast = generateRoast(userData);

    res.status(200).json({ userData, roast });
  } catch (error) {
    console.error('Error generating roast:', error.message);
    res.status(500).json({ error: 'Failed to generate roast.' });
  }
};

module.exports = { getRoast };

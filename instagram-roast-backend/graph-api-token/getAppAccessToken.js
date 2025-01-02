const axios = require('axios');

const getAppAccessToken = async () => {
  try {
    const response = await axios.get('https://graph.facebook.com/oauth/access_token', {
      params: {
        client_id: '882310270419066', // Replace with your App ID
        client_secret: '485fa102001ba253d89429c71271ea20', // Replace with your App Secret
        grant_type: 'client_credentials',
      },
    });
    console.log('App Access Token:', response.data.access_token);
  } catch (error) {
    console.error('Error generating App Access Token:', error.response?.data || error.message);
  }
};

getAppAccessToken();

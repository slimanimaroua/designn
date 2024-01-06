import axios from 'axios';

const sendRequest = async (url, method, data, headers) => {
  
  try {
    const response = await axios({
      method,
      url,
      headers: headers || {},
      data: data || null,
    });

    return response.data;
  } catch (error) {
    console.error('Error making API request:', error.message);
    throw error;
  }
};

export default sendRequest
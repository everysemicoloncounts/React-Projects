import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    // 'X-RapidAPI-Key': '3fd5790f06msh4d7166f339c91dcp1f4aafjsnb4f06e00c3a2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
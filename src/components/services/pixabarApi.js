import axios from 'axios';

const API_KEY = '34848340-3921ebdedd421f5516455587c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};

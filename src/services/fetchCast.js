import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7ffdfa152a9c960018794573fb7e1fc4'

export const fetchCast = async (id) => {

  const fetchResult = await axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .catch(error => {
      return new Error(error.message);
    });

  return fetchResult;
};



import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7ffdfa152a9c960018794573fb7e1fc4'


export const fetchSearch = async (search) => {

  const fetchResult = await axios
    .get(`${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${search}`)
    .catch(error => {
      return new Error(error.message);
    });

  return fetchResult;
};



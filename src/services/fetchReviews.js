import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7ffdfa152a9c960018794573fb7e1fc4'

export const fetchReviews = async (id) => {

  const fetchResult = await axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .catch(error => {
      return new Error(error.message);
    });

  return fetchResult;
};



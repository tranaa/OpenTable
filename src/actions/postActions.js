import { FETCH_RESTAURANTS } from './types';

export const fetchPosts = (filters) => dispatch => {
  const { city, name } = filters;
  let baseUrl = "https://opentable.herokuapp.com/api/restaurants?";
  baseUrl = Object.keys(filters).reduce((accumulator, key) => 
    {
      return accumulator.concat(`${key}=${filters[key]}&`)
    }
    , baseUrl);
  console.log(baseUrl);
  fetch(baseUrl)
  .then(res => res.json())
  .then(posts => dispatch({
      type: FETCH_RESTAURANTS,
      payload: posts 
  }));
}
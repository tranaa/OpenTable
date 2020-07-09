import { FETCH_RESTAURANTS, UPDATE_FILTERS } from './types';


export const baseUrlFilters = (filters) => {
  let baseUrl = "https://opentable.herokuapp.com/api/restaurants?";
  baseUrl = Object.keys(filters).reduce((accumulator, key) => 
  {
    return accumulator.concat(`${key}=${filters[key]}&`)
  }
  , baseUrl);
  return baseUrl;
}
export const fetchRestaurants = (filters) => dispatch => {
  fetch(baseUrlFilters(filters))
  .then(res => res.json())
  .then(posts => dispatch({
      type: FETCH_RESTAURANTS,
      payload: posts 
  }));
}

export const updateFilters = (filters) => dispatch => {
  dispatch({
    type: UPDATE_FILTERS,
    payload: filters
  });
}
import { FETCH_RESTAURANTS, UPDATE_FILTERS } from '../actions/types';

const initialState = {
    items: [],
    filters: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_RESTAURANTS:
            return {
                ...state,
                items: action.payload
            };
        case UPDATE_FILTERS:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
}
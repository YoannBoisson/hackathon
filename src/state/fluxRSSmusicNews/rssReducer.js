/**
 * Theo Muller - 02/11/2021
 * RSS reducer function
 */

/**
 * Import RSS types
 */
import rssTypes from './rssTypes';

/**
 * state by default
 */
const initialStaterss = {
  isLoading: false,
  news: [],
  error: '',
};

const rssReducer = (state = initialStaterss, action) => {
  if (action.type === rssTypes.LOAD_RSS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === rssTypes.LOAD_RSS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      news: action.payload,
    };
  }
  if (action.type === rssTypes.LOAD_RSS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default rssReducer;

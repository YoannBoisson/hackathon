/**
 * Jimmy Jung - 07/11/2021
 * artist reducer function
 */

/**
 * Import artist types
 */
import artistTypes from './artistTypes';

/**
 * state by default
 */
const initialStateArtist = {
  isLoading: false,
  info: {},
  error: '',
};

const artistReducer = (state = initialStateArtist, action) => {
  if (action.type === artistTypes.LOAD_ARTIST) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === artistTypes.LOAD_ARTIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      info: action.payload,
    };
  }
  if (action.type === artistTypes.LOAD_ARTIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default artistReducer;

/**
 * Jimmy Jung - 18/11/2021
 * Artists related reducer function
 */

/**
 * Import artists related types
 */
import artistsRelatedTypes from './artistsRelatedTypes';

/**
 * state by default
 */
const initialState = {
  isLoading: false,
  related: [],
  error: '',
};

const artistsRelatedReducer = (state = initialState, action) => {
  if (action.type === artistsRelatedTypes.LOAD_ARTISTS_RELATED) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === artistsRelatedTypes.LOAD_ARTISTS_RELATED_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      related: action.payload,
    };
  }
  if (action.type === artistsRelatedTypes.LOAD_ARTISTS_RELATED_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

export default artistsRelatedReducer;

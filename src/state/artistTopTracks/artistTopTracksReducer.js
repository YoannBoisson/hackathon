/**
 * Jimmy Jung - 07/11/2021
 * top artist tracks reducer function
 */

/**
 * Import top artist tracks types
 */
import artistTopTracksTypes from './artistTopTracksTypes';

/**
 * state by default
 */
const initialStateTopTracksArtist = {
  isLoading: false,
  top: [],
  error: '',
};

const artistTopTracksReducer = (
  state = initialStateTopTracksArtist,
  action
) => {
  if (action.type === artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
    };
  }
  if (action.type === artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default artistTopTracksReducer;

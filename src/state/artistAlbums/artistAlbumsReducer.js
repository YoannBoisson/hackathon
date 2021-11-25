/**
 * Jimmy Jung - 08/11/2021
 * Artist albums reducer function
 */

/**
 * Import artist albums types
 */
import artistAlbumsTypes from './artistAlbumsTypes';

/**
 * state by default
 */
const initialStateArtistAlbums = {
  isLoading: false,
  albums: [],
  error: '',
};

const artistAlbumsReducer = (state = initialStateArtistAlbums, action) => {
  if (action.type === artistAlbumsTypes.LOAD_ARTIST_ALBUMS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === artistAlbumsTypes.LOAD_ARTIST_ALBUMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      albums: action.payload,
    };
  }
  if (action.type === artistAlbumsTypes.LOAD_ARTIST_ALBUMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default artistAlbumsReducer;

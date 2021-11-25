/**
 * Jimmy Jung - 15/11/2021
 * Chart tracks reducer function
 */

/**
 * Import chart tracks types
 */
import genderArtistTypes from './genderArtistTypes';

/**
 * state by default
 */
const initialStateGender = {
  isLoading: false,
  genderArtist: [],
  error: '',
};

const genderArtistReducer = (state = initialStateGender, action) => {
  if (action.type === genderArtistTypes.LOAD_GENDER_ARTIST) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === genderArtistTypes.LOAD_GENDER_ARTIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      genderArtist: action.payload,
    };
  }
  if (action.type === genderArtistTypes.LOAD_GENDER_ARTIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }

  if (action.type === genderArtistTypes.LIKE) {
    const genderArtist = state.genderArtist.map((artist) => {
      if (artist.id === action.payload) {
        return { ...artist, isLiked: !artist.isLiked };
      }
      return artist;
    });

    return {
      ...state,
      genderArtist,
    };
  }
  return state;
};

export default genderArtistReducer;

import searchArtistTypes from './searchArtistTypes';

const initialStateSearchArtist = {
  isLoading: false,
  artistFound: [],
  error: '',
};

const searchArtistReducer = (state = initialStateSearchArtist, action) => {
  if (action.type === searchArtistTypes.LOAD_SEARCH_ARTIST) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === searchArtistTypes.LOAD_SEARCH_ARTIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      artistFound: action.payload,
    };
  }
  if (action.type === searchArtistTypes.LOAD_SEARCH_ARTIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default searchArtistReducer;

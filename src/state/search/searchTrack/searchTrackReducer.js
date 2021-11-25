import searchTrackTypes from './searchTrackTypes';

const initialStateSearchTrack = {
  isLoading: false,
  trackFound: [],
  error: '',
};

const searchTrackReducer = (state = initialStateSearchTrack, action) => {
  if (action.type === searchTrackTypes.LOAD_SEARCH_TRACK) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === searchTrackTypes.LOAD_SEARCH_TRACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      trackFound: action.payload,
    };
  }
  if (action.type === searchTrackTypes.LOAD_SEARCH_TRACK_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default searchTrackReducer;

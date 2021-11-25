import searchTrackTypes from './searchTrackTypes';

export const searchTrackLoading = () => {
  return {
    type: searchTrackTypes.LOAD_SEARCH_TRACK,
  };
};

export const searchTrackSuccess = (data) => {
  return {
    type: searchTrackTypes.LOAD_SEARCH_TRACK_SUCCESS,
    payload: data,
  };
};

export const searchTrackError = (error) => {
  return {
    type: searchTrackTypes.LOAD_SEARCH_TRACK_ERROR,
    payload: error,
  };
};

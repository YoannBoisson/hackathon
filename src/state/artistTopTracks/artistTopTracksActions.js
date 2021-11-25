import artistTopTracksTypes from './artistTopTracksTypes';

export const artistTopTracksLoading = () => {
  return {
    type: artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS,
  };
};

export const artistTopTracksSuccess = (data) => {
  return {
    type: artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS_SUCCESS,
    payload: data,
  };
};

export const artistTopTracksError = (error) => {
  return {
    type: artistTopTracksTypes.LOAD_ARTIST_TOP_TRACKS_ERROR,
    payload: error,
  };
};

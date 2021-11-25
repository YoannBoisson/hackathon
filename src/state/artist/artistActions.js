import artistTypes from './artistTypes';

export const artistLoading = () => {
  return {
    type: artistTypes.LOAD_ARTIST,
  };
};

export const artistSuccess = (data) => {
  return {
    type: artistTypes.LOAD_ARTIST_SUCCESS,
    payload: data,
  };
};

export const artistError = (error) => {
  return {
    type: artistTypes.LOAD_ARTIST_ERROR,
    payload: error,
  };
};

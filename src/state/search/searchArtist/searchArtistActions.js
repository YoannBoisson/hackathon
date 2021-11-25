import searchArtistTypes from './searchArtistTypes';

export const searchArtistLoading = () => {
  return {
    type: searchArtistTypes.LOAD_SEARCH_ARTIST,
  };
};

export const searchArtistSuccess = (data) => {
  return {
    type: searchArtistTypes.LOAD_SEARCH_ARTIST_SUCCESS,
    payload: data,
  };
};

export const searchArtistError = (error) => {
  return {
    type: searchArtistTypes.LOAD_SEARCH_ARTIST_ERROR,
    payload: error,
  };
};

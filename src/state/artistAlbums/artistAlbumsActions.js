import artistAlbumsTypes from './artistAlbumsTypes';

export const artistAlbumsLoading = () => {
  return {
    type: artistAlbumsTypes.LOAD_ARTIST_ALBUMS,
  };
};

export const artistAlbumsSuccess = (data) => {
  return {
    type: artistAlbumsTypes.LOAD_ARTIST_ALBUMS_SUCCESS,
    payload: data,
  };
};

export const artistAlbumsError = (error) => {
  return {
    type: artistAlbumsTypes.LOAD_ARTIST_ALBUMS_ERROR,
    payload: error,
  };
};

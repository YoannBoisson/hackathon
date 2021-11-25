import searchAlbumTypes from './searchAlbumTypes';

export const searchAlbumLoading = () => {
  return {
    type: searchAlbumTypes.LOAD_SEARCH_ALBUM,
  };
};

export const searchAlbumSuccess = (data) => {
  return {
    type: searchAlbumTypes.LOAD_SEARCH_ALBUM_SUCCESS,
    payload: data,
  };
};

export const searchAlbumError = (error) => {
  return {
    type: searchAlbumTypes.LOAD_SEARCH_ALBUM_ERROR,
    payload: error,
  };
};

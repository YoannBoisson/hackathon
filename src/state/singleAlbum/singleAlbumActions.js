import singleAlbumTypes from './singleAlbumTypes';

export const singleAlbumLoading = () => {
  return {
    type: singleAlbumTypes.LOAD_SINGLE_ALBUM,
  };
};

export const singleAlbumSuccess = (data) => {
  return {
    type: singleAlbumTypes.LOAD_SINGLE_ALBUM_SUCCESS,
    payload: data,
  };
};

export const singleAlbumError = (error) => {
  return {
    type: singleAlbumTypes.LOAD_SINGLE_ALBUM_ERROR,
    payload: error,
  };
};

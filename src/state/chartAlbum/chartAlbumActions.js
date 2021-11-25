import chartAlbumTypes from './chartAlbumTypes';

export const chartAlbumLoading = () => {
  return {
    type: chartAlbumTypes.LOAD_CHART_ALBUM,
  };
};

export const chartAlbumSuccess = (data) => {
  return {
    type: chartAlbumTypes.LOAD_CHART_ALBUM_SUCCESS,
    payload: data,
  };
};

export const chartAlbumError = (error) => {
  return {
    type: chartAlbumTypes.LOAD_CHART_ALBUM_ERROR,
    payload: error,
  };
};

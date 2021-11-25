import chartArtistsTypes from './chartArtistsTypes';

export const chartArtistsLoading = () => {
  return {
    type: chartArtistsTypes.LOAD_CHART_ARTISTS,
  };
};

export const chartArtistsSuccess = (data) => {
  return {
    type: chartArtistsTypes.LOAD_CHART_ARTISTS_SUCCESS,
    payload: data,
  };
};

export const chartArtistsError = (error) => {
  return {
    type: chartArtistsTypes.LOAD_CHART_ARTISTS_ERROR,
    payload: error,
  };
};

export const chartArtistsLike = (id) => {
  return {
    type: chartArtistsTypes.LIKE,
    payload: id,
  };
};

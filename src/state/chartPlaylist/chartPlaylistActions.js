import chartPlaylistTypes from './chartPlaylistTypes';

export const chartPlaylistLoading = () => {
  return {
    type: chartPlaylistTypes.LOAD_CHART_PLAYLIST,
  };
};

export const chartPlaylistSuccess = (data) => {
  return {
    type: chartPlaylistTypes.LOAD_CHART_PLAYLIST_SUCCESS,
    payload: data,
  };
};

export const chartPlaylistError = (error) => {
  return {
    type: chartPlaylistTypes.LOAD_CHART_PLAYLIST_ERROR,
    payload: error,
  };
};

import chartTracksTypes from './chartTracksTypes';

export const chartTracksLoading = () => {
  return {
    type: chartTracksTypes.LOAD_CHART_TRACKS,
  };
};

export const chartTracksSuccess = (data) => {
  return {
    type: chartTracksTypes.LOAD_CHART_TRACKS_SUCCESS,
    payload: data,
  };
};

export const chartTracksError = (error) => {
  return {
    type: chartTracksTypes.LOAD_CHART_TRACKS_ERROR,
    payload: error,
  };
};

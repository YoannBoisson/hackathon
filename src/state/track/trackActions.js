import trackTypes from './trackTypes';

export const trackLoading = () => {
  return {
    type: trackTypes.LOAD_TRACK,
  };
};

export const trackSuccess = (data) => {
  return {
    type: trackTypes.LOAD_TRACK_SUCCESS,
    payload: data,
  };
};

export const trackError = (error) => {
  return {
    type: trackTypes.LOAD_TRACK_ERROR,
    payload: error,
  };
};

import radioTypes from './radioTypes';

export const radioLoading = () => {
  return {
    type: radioTypes.LOAD_RADIO,
  };
};

export const radioSuccess = (data) => {
  return {
    type: radioTypes.LOAD_RADIO_SUCCESS,
    payload: data,
  };
};

export const radioError = (error) => {
  return {
    type: radioTypes.LOAD_RADIO_ERROR,
    payload: error,
  };
};

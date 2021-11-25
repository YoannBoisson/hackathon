import singleRadioTypes from './singleRadioTypes';

export const singleRadioLoading = () => {
  return {
    type: singleRadioTypes.LOAD_SINGLE_RADIO,
  };
};

export const singleRadioSuccess = (data) => {
  return {
    type: singleRadioTypes.LOAD_SINGLE_RADIO_SUCCESS,
    payload: data,
  };
};

export const singleRadioError = (error) => {
  return {
    type: singleRadioTypes.LOAD_SINGLE_RADIO_ERROR,
    payload: error,
  };
};

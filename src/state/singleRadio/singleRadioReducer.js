import singleRadioTypes from './singleRadioTypes';

const initialStateSingleRadio = {
  isLoading: false,
  station: {},
  error: '',
};

const singleRadioReducer = (state = initialStateSingleRadio, action) => {
  if (action.type === singleRadioTypes.LOAD_SINGLE_RADIO) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === singleRadioTypes.LOAD_SINGLE_RADIO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      station: action.payload,
    };
  }

  if (action.type === singleRadioTypes.LOAD_SINGLE_RADIO_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default singleRadioReducer;

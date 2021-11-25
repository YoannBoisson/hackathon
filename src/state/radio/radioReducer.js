import radioTypes from './radioTypes';

const initialStateRadio = {
  isLoading: false,
  top: [],
  error: '',
};

const radioReducer = (state = initialStateRadio, action) => {
  if (action.type === radioTypes.LOAD_RADIO) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === radioTypes.LOAD_RADIO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      top: action.payload,
    };
  }
  if (action.type === radioTypes.LOAD_RADIO_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default radioReducer;

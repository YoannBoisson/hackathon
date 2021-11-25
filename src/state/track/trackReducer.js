import trackTypes from './trackTypes';

const initialStateTrack = {
  isLoading: false,
  track: {},
  error: '',
};

const trackReducer = (state = initialStateTrack, action) => {
  if (action.type === trackTypes.LOAD_TRACK) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === trackTypes.LOAD_TRACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      track: action.payload,
    };
  }
  if (action.type === trackTypes.LOAD_TRACK_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default trackReducer;

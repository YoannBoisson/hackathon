/**
 * Jimmy Jung - 24/10/2021
 * Chart tracks reducer function
 */

/**
 * Import chart tracks types
 */
import genderTypes from './genderTypes';

/**
 * state by default
 */
const initialStateGender = {
  isLoading: false,
  gender: [],
  error: '',
};

const genderReducer = (state = initialStateGender, action) => {
  if (action.type === genderTypes.LOAD_GENDER) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === genderTypes.LOAD_GENDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      gender: action.payload,
    };
  }
  if (action.type === genderTypes.LOAD_GENDER_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default genderReducer;

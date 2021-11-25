import genderTypes from './genderTypes';

export const genderLoading = () => {
  return {
    type: genderTypes.LOAD_GENDER,
  };
};

export const genderSuccess = (data) => {
  return {
    type: genderTypes.LOAD_GENDER_SUCCESS,
    payload: data,
  };
};

export const genderError = (error) => {
  return {
    type: genderTypes.LOAD_GENDER_ERROR,
    payload: error,
  };
};
